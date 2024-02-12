const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Movie = new Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    actorList: { type: [Array], required: true },
    rating: { type: Number, required: true },
    yearReleased: { type: Number, required: true },
    runTime: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movies", Movie);
