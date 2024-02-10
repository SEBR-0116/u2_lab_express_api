const Actor=require('../models/actor')
const Movie=require('../models/movie')
const Review=require('../models/review')

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getActorById = async (req, res) => {
    try {
        const { id } = req.params;
        const actors = await Actor.find()
        if (actors[id]){
            res.json(actors[id])
        }
       else return res.status(404).send('Actor with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movies = await Movie.find()
        if (movies[id]){
            res.json(movies[id])
        }
       else return res.status(404).send('Movie with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getReviewById = async (req, res) => {
    try {
        const { id } = req.params;
        const reviews = await Review.find()
        if (reviews[id]){
            res.json(reviews[id])
        }
       else return res.status(404).send('Movie with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}







module.exports={
    getAllActors,
    getActorById,
    getAllMovies,
    getMovieById,
    getAllReviews,
    getReviewById
}
