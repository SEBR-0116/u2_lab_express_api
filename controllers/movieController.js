const  { Movie }  = require('../models');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovieById = async (request,response) => {
    try{
        const {id} = request.params
        const movies = await Movie.findById(id)
        if(movies){
            return response.json(movies)
        }
        return response.status(404).send('Movie with the specified ID does not exisit')
    } catch (error){
        return response.status(500).send(error.message)
    }
}

module.exports = {
    getAllMovies,
    getMovieById
}