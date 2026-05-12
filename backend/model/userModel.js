const pool = require("../database/db");

const createUser = async (name, email, password) => {
  const result = await pool.query(
    "Insert into users (name, email, password) values ($1, $2, $3)",
    [name, email, password],
  );
  return result.row[0];
};

module.exports = { createUser };
