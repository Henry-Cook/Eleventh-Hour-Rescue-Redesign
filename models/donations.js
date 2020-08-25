const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Donation = new Schema(
  {
    type: { type: String, required: true },
    amount: { type: String, required: true },
    number: { type: String, required: true },
    cvv: { type: String, required: true },
    expiration: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("donation", Donation);
