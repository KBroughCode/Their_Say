const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const User = new Schema({
  googleID: {
    type: String
  }
});

mongoose.model("users", User);
