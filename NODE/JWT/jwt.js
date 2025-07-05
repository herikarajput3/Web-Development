const jwt = require('jsonwebtoken');

// For protecting routes
const jwtAuthMiddleware = (req, res, next) => {

    try {
        // Step 1: Check if token is present in header or not
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }

        // Step 2: Extract token from header

        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        // Step 3: Verify token using secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        console.log("Decoded token:", decoded);

        // Step 4: Attach user details to request

        req.user = decoded;

        // Step 5: Call next middleware
        next();
    } catch (error) {
        console.log("Error", error);
        return res.status(401).json({ message: 'Unauthorized' })
    }
}

const generateToken = (user) => {
    // Add user details to payload object
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email
    };

    // Generate token using secret key
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    console.log("Token:", token);
    return token;
}

const verifyToken = (token) => {
    // Verify token using secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    return decoded;
}

module.exports = { jwtAuthMiddleware, generateToken, verifyToken };