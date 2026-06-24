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

const searchUser = async (keyword) => {
  const result = await pool.query(
    "select * from users where name ILike $1 or email like $1",
    [`%${keyword}%`],
  );
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
const updateById = async (id, name, email, password, image) => {
  const result = await pool.query(
    "update users set name = $1, email =$2, password =$3, image =$4 where id = $5 Returning id",
    [name, email, password, image, id],
  );
};
module.exports = {
  createUser,
  updateById,
  existingUser,
  deleteUserById,
  getAllUser,
  getUserById,
  searchUser,
};
