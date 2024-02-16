const express = require('express')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

const movieController = require('./controllers/movieController')
const actorController = require('./controllers/actorController')
const reviewController = require('./controllers/reviewController')

app.get('/', (req, res) => res.send('movie database'))

app.get('/movies', movieController.getAllMovies)
app.get('/movies/id/:id', movieController.getMovieById)
app.get('/movies/title/:title', movieController.getMovieByTitle)
app.get('/movies/rating/:rating', movieController.getMovieByRating)
app.get('/movies/sort', movieController.sort)
app.post('/movies/add', movieController.createMovie)
app.patch('/movies/id/:id', movieController.updateMovie)
app.patch('/movies/actor/:id', movieController.updateActors)
app.delete('/movies/id/:id', movieController.deleteMovie)

app.get('/actors', actorController.getAllActors)
app.get('/actors/id/:id', actorController.getActorById)
app.get('/actors/name/:name', actorController.getActorByName)
app.get('/actors/sort', actorController.sort)
app.post('/actors/add', actorController.createActor)
app.put('/actors/id/:id', actorController.updateActor)
app.delete('/actors/id/:id', actorController.deleteActor)

app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/id/:id', reviewController.getReviewById)
app.get('/reviews/reviewer/:reviewer', reviewController.getReviewByReviewer)
app.get('/reviews/sort', reviewController.sort)
app.get('/reviews/movie/:movieTitle', reviewController.searchByMovie)
app.post('/reviews/add', reviewController.createReview)
app.put('/reviews/id/:id', reviewController.updateReview)
app.delete('/reviews/id/:id', reviewController.deleteReview)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))