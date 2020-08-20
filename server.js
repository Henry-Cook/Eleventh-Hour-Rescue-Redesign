const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const storyRoutes = require("./routes/storyRoutes");
const db = require("./db/connection");

const PORT = process.env.PORT || 3000;

const app = express;

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use("/api", storyRoutes);

db.on("error", console.error.bind(console, "MongoDB Error"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("I am root");
});
