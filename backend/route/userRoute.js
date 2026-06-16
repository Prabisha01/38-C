const {
  addUser,
  login,
  getAllUserFromTheDB,
  getUserByIDDB,
  deleteUserByIDDB,
  updateUserIDBD,
} = require("../controller/userController");
const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploads");
const { verifyToken } = require("../middleware/verifyToken");
const { isAdmin } = require("../middleware/authMiddleware");
router.post("/create", upload.single("image"), addUser);
router.post("/login", login);
router.get("/getAll", verifyToken, isAdmin, getAllUserFromTheDB);
router.get("/getById/:id", getUserByIDDB);
router.delete("/deleteById/:id", deleteUserByIDDB);
router.put("/updateById/:id", upload.single("image"), updateUserIDBD);
module.exports = router;
