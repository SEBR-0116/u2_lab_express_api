const { Movie } = require('../models/')

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovieById = async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.json(movie)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getMovies,
    getMovieById
}