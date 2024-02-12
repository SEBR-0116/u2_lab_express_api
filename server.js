const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { Movie } = require('./models')
const cors = require('cors')


const movieController = require('./controllers/movieController')
const actorController = require('./controllers/actorController')
const reviewController = require('./controllers/reviewController')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

// app.use() middleware here ^ ///////////////////
app.use(cors())
//app.use(express.json())
app.use(bodyParser.json())
app.use(logger('dev'))



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is our landing page!'))


//Bonus I - AAU I want to Create, Update, and Delete my Actors, Movies, 
// and Reviews using either ThunderClient or a query.js file
////Movie CURD operation

app.get('/movies', movieController.getAllMovies)

app.get('/movies/:id',movieController.getMovieById)

app.post('/movies',movieController.createMovie)

app.put('/movies/:id',movieController.updateMovie)

app.delete('/movies/:id',movieController.deleteMovie)

///Get all the relevent details of Actor and Review for a perticilar Movie base on Id
app.get('/movie/:id',movieController.getAllActorReviewofMovie)

app.get('/movies/movie/:title',movieController.getMovieByTitle)

app.get('/movies/release/:year',movieController.getMovieByYear)


////Actor CURD operator

app.get('/actors',actorController.getAllActors)

app.get('/actors/:id',actorController.getActorById)

app.post('/actors',actorController.createActor)

app.put('/actors/:id',actorController.updateActor)

app.delete('/actors/:id',actorController.deleteActor)

app.get('/actors/actor/:name',actorController.getActorByName)

app.get('/actors/movie/:id',actorController.getActorDetailsForMovie)


/////Review CURD operator

app.get('/reviews',reviewController.getAllReview)

app.get('/reviews/:id',reviewController.getReviewById)

app.post('/reviews',reviewController.createReview)

app.put('/reviews/:id',reviewController.updateReview)

app.delete('/reviews/:id',reviewController.deleteReview)

//Bonus I
//AAU I want to sort my reviews by ascending or descending order
app.get('/reviews/sort/:type',reviewController.getReviewBySortTypeAsceorDesc) 



//Bonus I
//AAU I want to sort my movies by newest or oldest
app.get('/movies/sort/:type',movieController.getMoviesBySortNeworOld)
