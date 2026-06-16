const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      unique: true
    },

    discountType: {
      type: String,
      enum: [
        "percentage",
        "fixed"
      ]
    },

    value: Number,

    minimumOrder: Number,

    active: {
      type: Boolean,
      default: true
    },

    expiryDate: Date
  },
  {
    timestamps: true
  }
);

module.exports =
mongoose.model(
  "Coupon",
  couponSchema
);