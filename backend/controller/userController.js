const { createUser } = require("../model/userModel");

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        message: "field empty",
      });
    }
    const user = await createUser(name, email, password);
    if (user) {
      res.json({
        message: "Created Successfully",
        user: user,
      });
    }
  } catch (e) {
    res.json({
      message: "unsuccessful",
      e: e.message,
    });
  }
};

module.exports = { addUser };
