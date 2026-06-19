const mongoose = require("mongoose");

const loyaltySchema =
new mongoose.Schema(
  {
    user: {
      type:
      mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    points: {
      type: Number,
      default: 0
    },

    totalEarned: {
      type: Number,
      default: 0
    },

    totalRedeemed: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports =
mongoose.model(
  "Loyalty",
  loyaltySchema
);