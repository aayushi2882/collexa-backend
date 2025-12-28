require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
console.log("MONGO_URI:", process.env.MONGO_URI);


const app = express();

// Connect to MongoDB
connectDB(); 

// Middleware
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const eventRoutes = require("./routes/eventRoutes");
app.use("/events", eventRoutes);


app.get("/", (req, res) => {
  res.send("Collexa backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
