const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { Movie } = require('./models')

const movieController = require('./controllers/movieController')
const planController = require('./controllers/plantController')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

// app.use() middleware here ^ ///////////////////
//app.use(cors())
//app.use(express.json())
app.use(bodyParser.json())
app.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/movies', movieController.getAllMovies)

app.get('/movies/:id',movieController.getMovieById)

app.post('/movies',movieController.createMovie)

app.put('/movies/:id',movieController.updateMovie)

app.delete('/movies/:id',movieController.deleteMovie)
