const mongoose = require("mongoose");

const Messages = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model("Messages", Messages);
