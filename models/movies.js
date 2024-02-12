const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Movies = new Schema(
    {
        title: { type: String, required: true},
        genre: { type: Array, required: true },
        rating: { type: String, required: true },
        run_time: { type: String, required: true },
        year_released: { type: Number, required: true },
        director: { type: String, required: true },
        stars: { type: Array, required: true },
        isInSeries: { type: Boolean, required: true },
        animated: {type: Boolean, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Movie', Movies)