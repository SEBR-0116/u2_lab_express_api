const express = require('express');
//morgan
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const cors = require('cors')

const { Actor, Movie, Review } = require('./models')
const actorController = require('./controllers/actorController')
const movieController = require('./controllers/movieController')
const reviewController = require('./controllers/reviewController')


const PORT = process.env.PORT || 3001;
const app = express()

app.use(cors())
app.use(express.json())
//morgan
app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
app.get('/', (req, res) => res.send('Landing page!'))

app.get('/actors', actorController.getAllActors)

app.get('/movies', movieController.getAllMovies)

app.get('/reviews', reviewController.getAllReviews)
