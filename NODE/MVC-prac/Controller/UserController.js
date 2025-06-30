const User = require('../Model/UserSchema')
const bcrypt = require('bcrypt');
exports.userData = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        if (user) {
            res.status(201).json({ message: "User created successfully", user })
        }
        else {
            res.status(400).json({ message: "User not created" })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" }, error)
    }
};

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        // if (user) {
        //     const passwordMatch = await bcrypt.compare(password, user.password);
        //     if (passwordMatch) {
        //         res.status(200).json({ message: "User logged in successfully", user });
        //     } else {
        //         res.status(401).json({ message: "Invalid credentials" });
        //     }
        // } else {
        //     res.status(404).json({ message: "User not found" });
        // }
        if (!user) {
            res.status(400).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.cookie('user', user, { httpOnly: true, maxAge: 50000 });
            res.status(200).json({ message: 'Login Successfully' })
        } else {

            res.status(400).json({ message: 'Invalid credentials' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.dashboard = async (req, res) => {
    try {
        const user = req.cookies.user;
        if (!user) {
            res.status(401).json({ message: 'Unauthorized! Please sign in.' });
        }
        res.status(200).json({ message: "Dashboard" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.logout = async (req, res) => {
    res.clearCookie('user');
    res.status(200).json({ message: 'Logout Successfully' });
}