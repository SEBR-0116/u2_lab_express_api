const express = require('express')
const mongoose = require('mongoose')
const moviesController = require('./controllers/movies')
const reviewsController = require('./controllers/reviews')
const actorsController = require('./controllers/actors')
const db = require('./db')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Welcome to the Movie Database!')
})

// gets movies
//app.get('/movies', moviesController.getAllMovies)

// gets everything related to that movie. Movie as parent and reviews and actors as children
//app.get('/movies/:id', moviesController.getMovieDetails)

// gets all reviews
//app.get('/reviews', reviewsController.getAllReviews)

// gets all actors
//app.get('/actors', actorsController.getAllActors)

// creates 
// app.post('/actors', actorsController.createActor)
// app.post('/movies', moviesController.createMovie)
// app.post('/review', reviewsController.createReview)

// deletes by id
//app.delete('/movies/:id', reviewsController.deleteReview)
//app.delete('/movies/:id', actorsController.deleteActor)
//app.delete('/movies/:id', moviesController.deleteMovie)