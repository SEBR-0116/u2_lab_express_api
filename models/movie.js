const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String,
    runtime: Number,
    rating: Number,
    yearReleased: Number,
    description: String,
    posterImage: String,
})

module.exports = mongoose.model('Movie', movieSchema)