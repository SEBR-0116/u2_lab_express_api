const express = require('express');
const db = require('./db');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getMovies, getMovieById } = require('./controllers/movieController');
const { getMovieReviews } = require('./controllers/reviewController');
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
app.get('/movies/:id', getMovieById)
app.get('/movies/:id/reviews', getMovieReviews)
