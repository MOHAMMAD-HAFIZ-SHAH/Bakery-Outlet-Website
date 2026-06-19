const express = require("express");

const authMiddleware =
require("../middleware/authMiddleware");

const {
  getPoints
} = require(
  "../controllers/loyaltyController"
);

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  getPoints
);

module.exports = router;