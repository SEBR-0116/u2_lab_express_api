const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    duration: { type: String, required: true },
    rating: { type: Number, required: true },
    year_released: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
)

const Movies = mongoose.model('Movies', moviesSchema)

module.exports = Movies