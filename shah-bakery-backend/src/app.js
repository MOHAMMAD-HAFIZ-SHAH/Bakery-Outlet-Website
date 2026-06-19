const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const menuRoutes = require("./routes/menuRoutes");
const outletRoutes = require("./routes/outletRoutes");
const couponRoutes = require("./routes/couponRoutes");
const loyaltyRoutes = require("./routes/loyaltyRoutes");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Shah Bakery Backend Running",
    version: "1.0.0"
  });
});

app.use("/uploads", express.static("src/uploads"));

app.use("/api/auth", authRoutes);

app.use("/api/menu", menuRoutes);

app.use("/api/outlets", outletRoutes);

app.use("/api/coupons", couponRoutes);

app.use("/api/loyalty", loyaltyRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

module.exports = app;