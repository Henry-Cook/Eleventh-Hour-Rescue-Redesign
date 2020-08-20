const mongoose = require("mongoose");

let MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/storyDB";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch((e) => console.error("Error with the mongoDB connection", e.message));

module.exports = mongoose.connection;
