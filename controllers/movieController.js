const Movie = require('../models/Movie')

const getAllMovies = async (req,res) =>{
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteMoviesById = async (req,res) =>{
    try {
        const { id } = req.params;
        const deleted = await Movie.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Plant deleted")
        }
        throw new Error("Plant not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteAllMovies = async () => {
    try {
        const result = await Movie.deleteMany() // Delete all actors
        return result.deletedCount; // Return the count of deleted actors
    } catch (error) {
        throw new Error(`Error deleting actors: ${error.message}`) // Throw an error if deletion fails
    }
}

const createMovie = async (req, res) => {
    try {
        const movie = await new Movie(req.body)
        await movie.save()
        return res.status(201).json({
            movie,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateMovie = async (req, res) => {
    try {
        let { id } = req.params;
        let movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
        if (movie) {
            return res.status(200).json(movie)
        }
        throw new Error("Plant not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getMovieByName = async (req, res) => {
    try {
        const { name } = req.params
        const movie = await Movie.findOne({ title: name }) // Find movie by title
        if (!movie) {
            return res.status(404).send('Movie not found!')// If movie not found, send 404 response
        }
        res.json(movie)// Send movie as JSON response
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error') // Send 500 response for any server errors
    }
}


module.exports = {
    getMovieByName,
    getAllMovies,
    deleteMoviesById,
    deleteAllMovies,
    createMovie,
    updateMovie
}
