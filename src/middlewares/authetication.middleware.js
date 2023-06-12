const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    try {

        const token = req.headers["acces-token"];
        if (!token) {
            return next({
                status: 401,
                name: "No token",
                message: "Token is not present on headers request"
            })
        }

        const decoded = jwt.verify(token, "Arbelaez", {
            algorithms: "HS512",
        });

        req.user = decoded;
        next();
        
    } catch (error) {
        next({
            status: 498,
            name: "Invalid or expired token",
            message: error
        })
    }
}

module.exports = authenticate;