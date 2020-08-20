const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Stories = new Schema(
  {
    imgURL: { type: String, required: true },
    name: { type: String, required: true },
    story: { type: String, required: true },

  },
  { timestamps: true }
  );
  module.exports = mongoose.model("stories", Stories);