const Coupon = require("../models/Coupon");

const getCoupons = async (req, res) => {
  try {

    const coupons =
      await Coupon.find();

    res.json(coupons);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const createCoupon = async (
  req,
  res
) => {
  try {

    const coupon =
      await Coupon.create(req.body);

    res.status(201).json(coupon);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const validateCoupon = async (
  req,
  res
) => {
  try {

    const { code } = req.body;

    const coupon =
      await Coupon.findOne({
        code,
        active: true
      });

    if (!coupon) {
      return res.status(404).json({
        success: false,
        message: "Invalid Coupon"
      });
    }

    res.json({
      success: true,
      coupon
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getCoupons,
  createCoupon,
  validateCoupon
};