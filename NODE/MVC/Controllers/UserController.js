const User = require("../Model/UserSchema");

exports.userCreate = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });

        if (user) {
            res.status(201).json({ message: "User Created Successfully", user });
        } else {
            res.status(400).json({ message: "User not Created" });
        }
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: error.errmsg });

    }
};
exports.userFind = async (req, res) => {
    try {
        const users = await User.find();

        if (users) {
            res.status(200).json({ message: "Users fetched Successfully", users });
        } else {
            res.status(400).json({ message: "Users not fetched" });
        }
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: error.errmsg });

    }
};