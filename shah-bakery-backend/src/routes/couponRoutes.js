const express = require("express");

const {
  getCoupons,
  createCoupon,
  validateCoupon
} = require(
  "../controllers/couponController"
);

const router = express.Router();

router.get("/", getCoupons);

router.post("/", createCoupon);

router.post(
  "/validate",
  validateCoupon
);

module.exports = router;