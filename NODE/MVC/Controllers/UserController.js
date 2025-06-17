const User = require("../Model/RegisterSchema");
const bcrypt = require('bcrypt');

exports.userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashpassword = await bcrypt.hash(password, 3);
        const user = await User.create({ name, email, password: hashpassword });

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

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.status(200).json({ message: 'Login Successfully' })
        } else {
            res.status(400).json({ message: "Incorrect Password" });
        }

    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: error.errmsg });
    }
}

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

exports.getParticularUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await User.findById(id);
        if (userData) {
            res.status(200).json({ message: "User fetched Successfully", userData });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal server error" }, error.errmsg);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await User.findByIdAndDelete(id);
        if (userData) {
            res.status(200).json({ message: "User Deleted Successfully", userData });
        } else {
            res.status(400).json({ message: "User not deleted" });
        }
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal server error" }, error.errmsg);
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const userData = await User.findByIdAndUpdate(id, {
            name,
            email
        })
        if (userData) {
            res.status(200).json({ message: "User Updated Successfully", userData });
        } else {
            res.status(400).json({ message: "User data not updated" });
        }
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal server error" }, error.errmsg);
    }
}