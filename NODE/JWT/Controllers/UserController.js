const bcrypt = require('bcrypt');
const UserShema = require('../Models/UserSchema');
const { jwtAuthMiddleware, generateToken, verifyToken } = require('../jwt');
const UserSchema = require('../Models/UserSchema');
exports.userController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashPwd = await bcrypt.hash(password, 10);

        const newUser = await UserShema.create({
            name,
            email,
            password: hashPwd
        })

        const token = generateToken({ id: newUser._id, name: newUser.name, email: newUser.email });

        if (token) {
            res.status(201).json({ message: "User created successfully", token: token, user: newUser });
        } else {
            res.status(400).json({ message: "User not created" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserSchema.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (isMatch) {
            const token = generateToken({ id: user._id, name: user.name, email: user.email });

            return res.status(200).json({ message: "User logged in successfully", token: token });
        } else {
            return res.status(401).json({ message: "Password is incorrect" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}