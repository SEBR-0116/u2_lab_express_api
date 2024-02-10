const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    score: {
        type: Number,
        min: 0,
        max: 5
    },
    comment: String,
})

module.exports = mongoose.model('Review', reviewSchema)