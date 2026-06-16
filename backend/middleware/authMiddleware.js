const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "not admin",
      });
    }
    next();
  } catch (e) {
    res.json({
      message: "error in the file",
    });
  }
};
module.exports = { isAdmin };
