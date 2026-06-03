const pool = require("../database/db");

const createUser = async (name, email, password, image) => {
  const result = await pool.query(
    "Insert into users (name, email, password, image) values ($1, $2, $3, $4)  Returning *",
    [name, email, password, image],
  );
  return result.rows[0];
};
const existingUser = async (email) => {
  const result = await pool.query("Select * from users where email = $1", [
    email,
  ]);
  return result.rows[0];
};

const getAllUser = async () => {
  const result = await pool.query("Select * from users");
  return result.rows;
};

const getUserById = async (id) => {
  const result = await pool.query("Select * from users where id = $1", [id]);
  return result.rows[0];
};
const deleteUserById = async (id) => {
  const result = await pool.query("delete from users where id = $1", [id]);
  return result.rows[0];
};
module.exports = {
  createUser,
  existingUser,
  deleteUserById,
  getAllUser,
  getUserById,
};
