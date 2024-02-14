const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const {Actor, Movie, Review} = require('./models')

const actorController = require('./controllers/actorController')
const movieController = require('./controllers/movieController')
const reviewController = require('./controllers/reviewController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))

//// Routes ////
app.get('/', (req, res) => {res.send('welcome')})

// Actor Routes
app.get('/actors', actorController.getAllActors)
app.get('/actors/:id', actorController.getActorById)
app.post('/actors/', actorController.createActor)
app.put('/actors/:id', actorController.updateActor)
app.delete('/actors/:id', actorController.deleteActor)
// Movie Routes
app.get('/movies', movieController.getAllMovies)
app.get('/movies/:id', movieController.getMovieById)
app.post('/movies/', movieController.createMovie)
app.put('/movies/:id', movieController.updateMovie)
app.delete('/movies/:id', movieController.deleteMovie)
// Review Routes
app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getReviewById)
app.post('/reviews/', reviewController.createReview)
app.put('/reviews/:id', reviewController.updateReview)
app.delete('/reviews/:id', reviewController.deleteReview)