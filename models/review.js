const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Review = new Schema(
  {
    userName: { type: String, required: true },
    movieRating: { type: Number, required: true },
    reviewNote: { type: String, required: true },
    movieId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("reviews", Review);
