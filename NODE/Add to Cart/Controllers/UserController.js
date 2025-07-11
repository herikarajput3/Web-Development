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

}