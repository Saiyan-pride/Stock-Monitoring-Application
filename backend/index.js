require("dotenv").config();

const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const URI = process.env.MONGO_URL;
const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log("App listen - http://localhost:3002");
  mongoose.connect(URI);
  console.log("database connected");
});
