const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./database/db");
const userRoute = require("./route/userRoute");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  console.log("Server is running");
  res.send("The backend is running");
});

app.get("/db-config", async (req, res) => {
  const result = await pool.query("Select * from students");
  res.json(result.rows);
});
app.use("/api", userRoute);
app.listen(PORT, () => {
  console.log(`Server is run  hhghghggfdfd ninghhhhh ${PORT}`);
});
