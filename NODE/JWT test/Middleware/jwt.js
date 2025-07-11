const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(400).json({ message: "No token provided" });
    }

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        res.status(400).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();

}

const generateToken = (user) => {
    const payload = {
        name: user.name,
        email: user.email
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.EXPIRES_IN
    })

    return token;
}

module.exports = { jwtAuthMiddleware, generateToken };