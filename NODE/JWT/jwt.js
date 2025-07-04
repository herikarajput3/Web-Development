const jwt = require('jsonwebtoken');

const algorithm = 'HS256';

const jwtAuthMiddleware = (req, res, next) => {
    try {
        // Check if the token exists or not in the header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({
                message: "No Token Provided"
            });
        }
        // if the token exists, then verify it using secret key and algorithm

        const token = req.headers.authorization.split(' ')[1]; // Token is in the second position of the header
        // If the token doesn't exist then return an error
        if (!token) {
            return res.status(401).json({
                message: "No Token Provided"
            });
        }
        // If the token is valid then pass the request to the next middleware

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        //save the decoded token in the request object so that we can use it in the next middleware
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized Access"
        })
    }
}

// Function to generate JWT token
// we pass user details as payload 

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
        algorithm
    });
};

// Function to verify the JWT token
const verifyToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    return decoded;
}

module.exports = {jwtAuthMiddleware, generateToken, verifyToken};