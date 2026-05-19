const { addUser, login } = require("../controller/userController");
const express = require("express");
const router = express.Router();

router.post("/create", addUser);
router.post("/login", login);

module.exports = router;
