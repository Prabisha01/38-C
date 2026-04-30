const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  console.log("Server is running");
  res.send("The backend is running");
});
app.listen(PORT, () => {
  console.log(`Server is run  hhghghggfdfd ninghhhhh ${PORT}`);
});
