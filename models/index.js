const mongoose = require('mongoose')
const actorSchema = require('./actor')
const movieSchema = require('./movie')
//const movieActorSchema = require('./movieActor')


const Actor = mongoose.model('actor',actorSchema)
const Movie = mongoose.model('movie',movieSchema)
//const movieActor = mongoose.model('movieActor',movieActorSchema)


module.exports = {

  Actor,
  Movie,
  movieActor

}