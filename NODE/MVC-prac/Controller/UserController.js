const User = require('../Model/UserSchema')

exports.userData = async (req, res) => {
    try {
        const user = await User.create(req.body);
        if (user) {
            res.status(201).json({ message: "User created successfully", userData })
        }
        else {
            res.status(400).json({ message: "User not created" })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" }, error)
    }
};