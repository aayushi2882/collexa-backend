const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Collexa backend is running 🚀");
});

// port
const PORT = process.env.PORT || 5000;

// server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
