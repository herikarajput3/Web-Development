const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        req.user = decoded;
        next();
    } catch (error) {
        console.log("Error", error);
        return res.status(401).json({ message: 'Unauthorized' })
    }
}

const generateToken = (user) => {
    const payload = {
        name: user.name,
        email: user.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    return token;
}


module.exports = { jwtAuthMiddleware, generateToken };