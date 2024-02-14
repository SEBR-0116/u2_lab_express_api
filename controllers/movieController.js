const Movie = require('../models/movie')

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovieById = async(req,res) => {
    try {
        const{id} = req.params
        const movie = await Movie.findById(id)
        // If there is a matching movie, send back the movie
        if (Movie) {
            return res.json(movie)
        }
        return res.status(404).send('Movie not found')
    } catch (error) {
        // If there's another (ex. internal) error
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMovies,
    getMovieById
}