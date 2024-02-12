const Movie  = require('../models/movies')

const getAllMovies = async (req, res) => {
    try {
        const movies = (await Movie.find().sort('year_released')).reverse('year_released')
        res.json(movies)
    } catch (e) {
        return res.status(500).send(e.message);
    } 
}

const getMovieById = async (req, res) => {
    try {
        const {id} = req.params
        const movies = await Movie.findById(id)
        if (movies) {
            return res.json(movies)
        }
       res.status(404).send('Movie with the specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports = {
    getAllMovies,
    getMovieById
}