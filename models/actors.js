const mongoose = require('mongoose')

const actorsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    as: { type: String, required: true },
    alive: { type: Boolean, default: true },
    movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movies', required: true }
  },
  { timestamps: true }
)

const Actors = mongoose.model('Actors', actorsSchema)

module.exports = Actors