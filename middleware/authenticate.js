const jwt = require("jsonwebtoken");
const config = require("../jwt.config")

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    console.log("No token found in the auth header:", authHeader)
    return res.status(401).json({ message: "A token is required." })
  }

  const token = authHeader;

  try {
    const decoded = jwt.verify(token, config.jwtSecret)
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message)
    return res.status(401).json({ message: "Invalid token" })
  }
};

module.exports = authenticate;




  