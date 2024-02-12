const { Movie } = require('../models/')

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        
        if (req.query.sorted == "newest") {
            res.json(movies.sort((movie1, movie2) => (movie1.date_released < movie2.date_released) ? 1 : movie1.date_released > movie2.date_released ? -1 : 0))
        } else if (req.query.sorted == "oldest") {
            res.json(movies.sort((review1, review2) => (review1.date_released > review2.date_released) ? 1 : review1.date_released < review2.date_released ? -1 : 0))
        } else {
            res.json(movies)
        }
    } catch (error) {
        return res.status(500).send("An error has occured")
    }
}

const getMovieById = async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        if (movie) {
            res.json(movie)
        }
    } catch (error) {
        return res.status(500).send('Movie with the specified ID does not exists');
    }
}

const createMovie = async (req, res) => {
    try {
        const movie = await new Movie(req.body)
        await movie.save()
        return res.status(201).json({
            movie,
        })
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
        throw new Error("Movie not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Movie.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Movie deleted");
        }
        throw new Error("Movie not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}