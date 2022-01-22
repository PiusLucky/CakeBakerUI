const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;


const orderSchema = new mongoose.Schema(
  {
    user: String,
    name: {
      type: String,
      maxlength: 60,
      trim: true,
    },
    color: {
      type: String,
      trim: true,
    },
    paid: {
      type: Boolean,
      default: false,
      required: true
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    size: {
      type: String,
      required: true,
      enum: ["S", "M", "L"],
      default: "S",
    },
    note: {
      type: String,
      maxlength: 150,
      trim: true,
    },
    delivery_date: {
      type: Date,
      required: true
    },
    reference: {
        type: String
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("order", orderSchema, "Order Collection");