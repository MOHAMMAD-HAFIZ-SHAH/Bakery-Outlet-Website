const express = require("express");

const {
  getMenu,
  createMenuItem
} = require(
  "../controllers/menuController"
);

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

const upload =
require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/", getMenu);

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createMenuItem
);

module.exports = router;