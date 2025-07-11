const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
    const authHeader = req.header.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(400).json({ message: "No token provided" });
    }

    const token = req.header.authorization.split(' ')[1];

    if (!token) {
        res.status(400).json({
            message: "No Token provided"
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
}

const generateToken = (user) => {
    const payload = {
        name: user.name,
        email: user.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });

    return token;
}

module.exports = { jwtAuthMiddleware, generateToken }