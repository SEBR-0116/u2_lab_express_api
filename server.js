const express = require('express')
const db = require('./db');
const movieControllers = require('./controllers/movieController')
const actorControllers = require('./controllers/actorController')
const reviewControllers = require('./controllers/reviewController')

const PORT = process.env.PORT || 3001
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/middleware', (req, res, next) => {
    console.log('this is middleware')
    next()
},
(req, res) => {
    res.send('response completed')
})

app.get('/', (req, res) => res.send('Hi Daisy'))

app.get('/movies', movieControllers.getAllMovies)
app.get('/movies/:id', movieControllers.getMovieById)

app.get('/actors', actorControllers.getAllActors)
app.get('/actors/:id', actorControllers.getActorsById)

app.get('/reviews', reviewControllers.getAllReviews)
app.get('/reviews/:id', reviewControllers.getReviewsById)