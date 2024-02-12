const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Review = new Schema(
  {
    movieName: {type:String, required:true},
    comment: { type: String, required: true },
    score: {
      type: Number,
      min: [0, "Must be at least 0, got {VALUE}"],
      max: 5,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", Review);
