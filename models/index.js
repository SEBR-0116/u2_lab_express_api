const mongoose = require('mongoose')
const moviesSchema = require('./movies')
const reviewsSchema = require('./reviews')
const actorsSchema = require('./actors')

const Movies = mongoose.model('Movies', moviesSchema)
const Reviews = mongoose.model('Reviews', reviewsSchema)
const Actors = mongoose.model('Actors', actorsSchema)

module.exports = {
  Movies,
  Reviews,
  Actors
}