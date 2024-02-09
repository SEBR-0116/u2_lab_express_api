const express = require('express');
const db = require('./db');

const { Movie } = require('./models')

const movieController = require('./controllers/movieController')
const planController = require('./controllers/plantController')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

// app.use() middleware here ^ ///////////////////
// app.use(cors())
// app.use(express.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/movies', movieController.getAllMovies)

app.get('/movies/:id',movieController.getMovieById)

// server.js
// app.get('/movies', async (req, res) => {
//     const movies = await Movie.find()
//     res.json(movies)
//   })

//   app.get('/test',async(req,res) => {
//     res.send("Testing")
//   })

//   app.get('/plants', planController.getAllPlants)