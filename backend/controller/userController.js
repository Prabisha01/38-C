const { createUser, existingUser } = require("../model/userModel");

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "field empty",
      });
    }
    const user = await createUser(name, email, password);
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
      return res.json({
        message: "field empty jjsjdsjd",
      });
    }
    const user = await existingUser(email);
    if (!user) {
      return res.json({
        message: "email is not registered",
      });
    }
    if (user.password != password) {
      return res.json({
        message: "password doesnot matched",
      });
    }
    if (user) {
      res.json({
        message: "login successful",
        user: user,
      });
    }
  } catch (e) {
    res.json({
      message: "not successful",
      e: e.message,
    });
  }
};
module.exports = { addUser, login };
