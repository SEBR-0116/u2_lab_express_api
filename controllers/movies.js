const Movies = require('../models/movies')
const Reviews = require('../models/reviews')
const Actors = require('../models/actors')

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.json(movies)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMovieDetails = async (req, res) => {
  try {
    const movieId = req.params.id
    const movie = await Movies.findById(movieId)

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    // attaches reviews and actors to the result when displayed
    const reviews = await Reviews.find({ movie_id: movieId })
    const actors = await Actors.find({ movie_id: movieId })

    const movieDetails = {
      movie,
      reviews,
      actors,
    }

    res.json(movieDetails)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createMovie = async (req, res) => {
try {
  const movie = await new Movies(req.body)
  await movie.save()
  return res.status(201).json({
      movie
  })
} catch (error) {
  return res.status(500).json({ error: error.message })
}
}

const deleteMovie = async (req, res) => {
  try {
      const { id } = req.params
      const deleted = await Movies.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Movie deleted")
      }
      throw new Error("Movie not found")
  } catch (error) {
      return res.status(500).send(error.message)
  }
}


module.exports = {
  getAllMovies,
  getMovieDetails,
  deleteMovie,
  createMovie
}