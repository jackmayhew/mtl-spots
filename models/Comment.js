const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },

  spot: {
    type: String,
    required: true,
  },

  time: {
    type: Number,
    default: Date.now(),
  },
});

module.exports =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
