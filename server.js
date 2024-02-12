const express = require('express');
const db = require('./db');
const actorController = require('./controllers/actorController')
const movieController = require('./controllers/movieController')
const logger = require('morgan')
const bodyParser = require('body-parser')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express()

app.use(logger('dev'))

// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is our landing page!'))




app.get('/actors',actorController.getAllActors)

app.get('/actors/:name',actorController.getActorByName)

app.delete('/actors/:id',actorController.deleteActorById)

app.delete('/actors',actorController.deleteAllActors)

app.get('/movies/:name',movieController.getMovieByName)

app.get('/movies',movieController.getAllMovies)

app.delete('/movies/:id',movieController.deleteMoviesById)

app.delete('/movies',movieController.deleteAllMovies)

app.post('/movies',movieController. createMovie)

app.put('/movies/:id',movieController. updateMovie)

