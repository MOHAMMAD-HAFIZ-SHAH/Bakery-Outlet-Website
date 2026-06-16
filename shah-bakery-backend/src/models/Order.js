const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    outlet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Outlet"
    },

    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "MenuItem"
        },

        quantity: Number,

        quantityType: String,

        price: Number
      }
    ],

    subtotal: Number,

    gst: Number,

    total: Number,

    paymentMethod: String,

    paymentStatus: {
      type: String,
      default: "pending"
    },

    orderStatus: {
      type: String,
      default: "placed"
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.model("Order", orderSchema);