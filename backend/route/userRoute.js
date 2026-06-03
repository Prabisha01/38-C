const {
  addUser,
  login,
  getAllUserFromTheDB,
  getUserByIDDB,
  deleteUserByIDDB,
} = require("../controller/userController");
const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploads");
router.post("/create", upload.single("image"), addUser);
router.post("/login", login);
router.get("/getAll", getAllUserFromTheDB);
router.get("/getById/:id", getUserByIDDB);
router.delete("/deleteById/:id", deleteUserByIDDB);
module.exports = router;
