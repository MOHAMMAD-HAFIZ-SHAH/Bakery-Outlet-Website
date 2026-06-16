const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const menuRoutes = require("./routes/menuRoutes");
const outletRoutes = require("./routes/outletRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Shah Bakery Backend Running"
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/menu", menuRoutes);

app.use("/api/outlets", outletRoutes);

module.exports = app;