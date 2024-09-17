const { Schema } = require('mongoose')

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    runtime: { type: Number},
    rating: { type: Number, min:0,max:5},
    year_release: { type: Date, default: Date.now },
    description: { type: String, required: false },
    gener: { type: String, required: false },
    image: {type: String}
  },
  { timestamps: true }
)

module.exports = movieSchema