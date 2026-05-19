const pool = require("../database/db");

const createUser = async (name, email, password) => {
  const result = await pool.query(
    "Insert into users (name, email, password) values ($1, $2, $3)  Returning *",
    [name, email, password],
  );
  return result.rows[0];
};
const existingUser = async (email) => {
  const result = await pool.query("Select * from users where email = $1", [
    email,
  ]);
  return result.rows[0];
};

module.exports = { createUser, existingUser };
