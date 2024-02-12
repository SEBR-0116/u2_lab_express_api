const express = require('express');
const db = require('./db');

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const bodyParser=require('body-parser')

const app = express();

const logger = require('morgan');
app.use(logger('dev'))
app.use(bodyParser.json())

const controllers=require('./controllers/movieController')

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send("For my index lists, I opted to convert the Id's into just singular numbers, i.e. 0, 1, 2, 3, 4 etc for convenience instead of long random assortments. So any endpoints that require an index/id, just enter a normal number, thanks :)"))

app.get('/actors', controllers.getAllActors)

app.get('/actors/:id', controllers.getActorById)

app.get('/movies', controllers.getAllMovies)

app.get('/movies/:id', controllers.getMovieById)

app.get('/reviews', controllers.getAllReviews)

app.get('/reviews/:id', controllers.getReviewById)
