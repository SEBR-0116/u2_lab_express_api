const mongoose = require('mongoose')
const movieSchema = require('./movie')
const actorSchema = require('./actor')
const reviewSchema = require('./review')


const Movie = mongoose.model('movie',movieSchema)
const Actor = mongoose.model('actor',actorSchema)
const Review = mongoose.model('review',reviewSchema)


module.exports = {

  Movie,
  Actor,
  Review

}
