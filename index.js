const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
console.log("MONGO_URI:", process.env.MONGO_URI);


const app = express();

connectDB(); // 👈 THIS MUST BE HERE

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Collexa backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
