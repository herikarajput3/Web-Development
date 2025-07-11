const bcrypt = require('bcrypt');
const userSchema = require('../Model/userSchema');
const { generateToken } = require('../Middleware/jwt');

exports.userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashPassword = await bcrypt.hashSync(password, 10);

        const user = await userSchema.create({ name, email, password: hashPassword });

        const token = generateToken({ name: user.name, email: user.email });

        if (token) {

            return res.status(200).json({ message: 'User created successfully', token, user });
        }
        else {
            return res.status(400).json({ message: 'User creation failed' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}