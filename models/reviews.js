const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema(
  {
    score: { type: String, required: true, min: 1, max: 10 },
    comment: { type: String, required: true },
    movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movies', required: true },
  },
  { timestamps: true }
)

const Reviews = mongoose.model('Reviews', reviewsSchema)

module.exports = Reviews