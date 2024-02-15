const { Movie } = require('../models');

const getAllMovies = async (req,res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllMovies,
}