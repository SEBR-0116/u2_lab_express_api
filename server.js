const express = require('express');
const db = require('./db');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getMovies, getMovieById, updateMovie, deleteMovie, createMovie } = require('./controllers/movieController');
const { getMovieReviews, getMovieReviewsById, createReview, updateReview, deleteReview } = require('./controllers/reviewController');
const { getActors, getActorById, updateActor, deleteActor, createActor } = require('./controllers/actorController');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req,res) => {
    res.send("Welcome to GAMEMDB")
})

app.get('/movies', getMovies)
app.post('/movies/create', createMovie)
app.get('/movies/:id', getMovieById)
app.put('/movies/:id/update', updateMovie)
app.delete('/movies/:id/delete', deleteMovie)

app.get('/movies/:id/reviews', getMovieReviews)
app.get('/movies/:id/reviews/:reviewId', getMovieReviewsById)
app.put('/movies/:id/reviews/:reviewId/update', updateReview)
app.delete('/movies/:id/reviews/:reviewId/delete', deleteReview)

app.get('/actors', getActors)
app.post('/actors/create', createActor)
app.get('/actors/:id', getActorById)
app.put('/actors/:id/update', updateActor)
app.delete('/actors/:id/delete', deleteActor)

app.post('/reviews/create', createReview)

app.get('/*', (req,res) => {
    res.send('An error has occurred')
})