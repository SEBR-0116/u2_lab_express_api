const express = require('express')
const db = require('./db')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const movieController = require('./controllers/movieController')
const actorController = require('./controllers/actorController')
const reviewController = require('./controllers/reviewController')

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.get('/movies', movieController.getAllMovies)
app.get('/movies/:id', movieController.getMovieById)

app.get('/actors', actorController.getAllActors)
app.get('/actors/:id', actorController.getActorById)

app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getReviewById)

app.listen(PORT, () => {
	console.log(`Express server listening on port ${PORT}`)
})
