const mongoose = require("mongoose");

// let's create user schema
const transectionHistroySchema = new mongoose.Schema({
  transectionId: {
    type: Number,
    required: true,
  },
  senderName: {
    type: String,
    required: [true, "Please add user name"],
    trim: true,
    maxlength: [30, "Name connot be more than 30 characters"],
  },
  receiverName: {
    type: String,
    required: [true, "Please add user name"],
    trim: true,
    maxlength: [30, "Name connot be more than 30 characters"],
  },
  transectionAmount: {
    type: Number,
    required: true,
  },
});

module.exports =
  mongoose.models.TransectionHistory ||
  mongoose.model("TransectionHistory", transectionHistroySchema);
