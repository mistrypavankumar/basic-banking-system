const mongoose = require("mongoose");

// let's create user schema
const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Please add user name"],
  },
  email: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
