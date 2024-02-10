const mongoose = require('mongoose')
const movieSchema = require('./movies')
const actorSchema = require('./actors')
const reviewSchema = require('./reviews')

const Movie = mongoose.model('Movies', movieSchema)
const Actor = mongoose.model('Actors', actorSchema)
const Review = mongoose.model('Reviews', reviewSchema)


module.exports = {
  Movie,
  Actor,
  Review
}