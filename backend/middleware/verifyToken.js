const JWT = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: "No token found",
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (e) {
    res.json({
      message: "error verifying",
    });
  }
};
module.exports = { verifyToken };
