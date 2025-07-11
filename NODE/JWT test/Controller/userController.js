const bcrypt = require('bcrypt');
const userSchema = require('../Model/userSchema');
const { generateToken } = require('../Middleware/jwt');
exports.userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashpwd = await bcrypt.hashSync(password, 10);

        const user = await userSchema.create({ name, email, password: hashpwd });

        const token = generateToken(user);

        if (user) {
            res.status(201).json({ message: "User created successfully", user, token });
        } else {
            res.status(400).json({ message: "User not created" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }

}

exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userSchema.findOne({ email })
        if (!user) {
            return res.status(401).send('Invalid email or password')
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = generateToken({ name: user.name, email: user.email });

            return res.status(200).json({ message: "Login successfully", token })

        } else {
            return res.status(401).json({ message: 'Invalid password' })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }

}

exports.dashboard = async (req, res) => {
    try {
        const user = await userSchema.find();
        if (user) {

            return res.status(200).json({ message: "Welcome to the Dashboard"})

        } else {
            return res.status(401).json({ message: 'Invalid credentials' })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}