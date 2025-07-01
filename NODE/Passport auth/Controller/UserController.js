const passport = require("passport");
const UserSchema = require("../Model/UserSchema");

exports.userRegister = async (req, res) => {
    try {
        const { name, email, pwd } = req.body;
        const newUser = await UserSchema.create({ name, email, pwd });
        if (newUser) {
            res.status(201).json({ message: "User registered successfully", user: newUser });
        } else {
            res.status(400).json({ message: "User not registered" });
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.userLogin = async (req, res, next) => {
    passport.authenticate('local', (error, user, info) => {
        if (error) return next(error, "Error logging in");
        if (!user) res.status(401).json({ message: "Invalid username or password" });
        
        req.logIn(user, (err) => {
            if (err) return next(err);
            res.status(200).json({ message: "Login successfully" });
        })
    })(req, res, next);
}

exports.logOut = async (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ message: 'Error logging out' });
        res.redirect('/');
    });
};

exports.getUser = async (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json({ message: `Welcome to your profile, ${req.user.name}` });
    } else {
        res.status(401).json({ message: 'You are not authenticated' });
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserSchema.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching users: ' + err })
    }
}