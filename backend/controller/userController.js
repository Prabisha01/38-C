const { createUser, existingUser } = require("../model/userModel");
const bcrypt = require("bcrypt");
const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "field empty",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await createUser(name, email, hashpassword);
    if (user) {
      res.status(201).json({
        message: "Created Successfully",
        user: user,
      });
    }
  } catch (e) {
    res.status(500).json({
      message: "unsuccessful",
      e: e.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "field empty jjsjdsjd",
      });
    }
    const user = await existingUser(email);
    if (!user) {
      return res.status(404).json({
        message: "email is not registered",
      });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.json({
        message: "password doesnot matched",
      });
    }
    if (user) {
      res.status(200).json({
        message: "login successful",
        user: user,
      });
    }
  } catch (e) {
    res.status(500).json({
      message: "not successful",
      e: e.message,
    });
  }
};
module.exports = { addUser, login };
