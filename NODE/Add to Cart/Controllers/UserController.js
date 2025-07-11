const bcrypt = require('bcrypt');
const UserSchema = require('../Models/UserSchema');
const { generateToken } = require('../Middleware/jwt');
exports.userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashPwd = await bcrypt.hash(password, 10);
        const user = await UserSchema.create({ name, email, password: hashPwd });

        const token = generateToken(user);
        if (user) {
            res.status(201).json({ message: "User registered successfully", user, token });
        } else {
            res.status(400).json({ message: "User registration failed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserSchema.findOne({ email })
        if (!user) {
            return res.status(401).send('Invalid email or password')
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = generateToken({ name: user.name, email: user.email });

            return res.status(200).json({ message: "Login successfully", token })

        } else {
            return res.status(400).json({ message: 'Invalid password' })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.dashboard = async (req, res) => {
    try {
        const user = await UserSchema.find();

        if (user) {

            return res.status(200).json({ message: `Welcome to the Dashboard ${req.user.name}` })

        } else {
            return res.status(400).json({ message: 'Invalid credentials' })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.userUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const user = await UserSchema.findByIdAndUpdate(id, { name, email });
        if (user) {
            return res.status(200).json({ message: "user updated successfully",user })

        } else {
            return res.status(400).json({ message: 'user not updated' })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }

}
exports.userDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserSchema.findByIdAndDelete(id);
        if (user) {
            return res.status(200).json({ message: "user deleted successfully" })

        } else {
            return res.status(400).json({ message: 'user not deleted' })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }

}