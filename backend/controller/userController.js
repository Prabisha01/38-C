const {
  createUser,
  existingUser,
  getAllUser,
  getUserById,
} = require("../model/userModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const image = req.file ? req.file.filename : null;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "field empty",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await createUser(name, email, hashpassword, image);
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
    const { email, password: inputPassword } = req.body;
    if (!email || !inputPassword) {
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
    const isMatched = await bcrypt.compare(inputPassword, user.password);
    if (!isMatched) {
      return res.json({
        message: "password doesnot matched",
      });
    }
    const token = JWT.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );
    const { password, ...safeUser } = user;

    res.status(200).json({
      message: "login successful",
      user: safeUser,
      token,
    });
  } catch (e) {
    res.status(500).json({
      message: "not successful",
      e: e.message,
    });
  }
};

const getAllUserFromTheDB = async (req, res) => {
  try {
    const user = await getAllUser();
    if (!user || user.length == 0) {
      return res.status(400).json({
        message: "user is not present",
      });
    }
    res.status(200).json({
      message: "successful",
      user: user,
    });
  } catch (e) {
    res.status(500).json({
      message: "unsuccessful",
      e: e.message,
    });
  }
};

const getUserByIDDB = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({
        message: "not found",
      });
    }
    res.status(200).json({
      message : "successfully fetched",
      user: user
    })
  } catch (e) {
    res.status(500).json({
      message: "unsuccessful",
      e: e.message,
    });
  }
};
module.exports = { addUser, login, getAllUserFromTheDB ,getUserByIDDB};
