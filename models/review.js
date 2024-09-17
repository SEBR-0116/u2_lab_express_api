const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    score: { type: Number, min:0,max:100 },
    comments: { type: String, required: true },
    movie_id: {type: Schema.Types.ObjectId,ref:'movie_id'}
  },
  { timestamps: true }
)

module.exports = reviewSchema