const { Schema, default: mongoose } = require('mongoose')

const brandSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    runtime: { type: mongoose.Decimal128, required: false },
    rating: { type: Number, min:0,max:5},
    year_release: { type: Date, default: Date.now },
    description: { type: String, required: false },
    gener: { type: String, required: false },
    image: {type: String}
  },
  { timestamps: true }
)

module.exports = brandSchema