const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  bust: {
    type: String,
    required: true,
  },

  ig: {
    type: String,
  },

  description: {
    type: String,
  },

  comments: {
    type: String,
  },

  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Spot || mongoose.model("Spot", SpotSchema);
