const jwtAuthMiddleware = (res, req, next) => {
    const authHeader = req.header.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {

    }
}