const {
  addUser,
  login,
  getAllUserFromTheDB,
} = require("../controller/userController");
const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploads");
router.post("/create", upload.single("image"), addUser);
router.post("/login", login);

router.get("/getAll", getAllUserFromTheDB);

module.exports = router;
