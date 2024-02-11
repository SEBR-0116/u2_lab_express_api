const Movie = require('../models/movie')

const getAllMovies = async (req, res) => {
    try{
        const movies = await Movie.find()
        res.json(movies)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id)
        if (movie) {
            return res.json(movie);
        }
        return res.status(404).send('Movie with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getAllMovies,
    getMovieById,

}