const { Review, Movie } = require('../models');

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({}).populate({path: 'movie_id', select: 'title'})
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getReviewById = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findById(id).populate({path: 'movie_id', select: 'title'})
        if (review) {
            return res.json(review)
        }
        return res.status(404).send('Review does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getReviewByReviewer = async (req, res) => {
    try {
        const {reviewer} = req.params
        const regex = new RegExp(reviewer, 'i')
        const reviews = await Review.find({reviewer: {$regex: regex}}).populate({path: 'movie_id', select: 'title'})
        return res.status(404).send('Review does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const sort = async (req, res) => {
    try {
        const field = req.query.field
        const sort = req.query.sort
        const reviews = await Review.find({}).populate({path: 'movie_id', select: 'title'})
        let sorted
        if (sort === 'ascending') {
            if (field === 'score') {
                sorted = reviews.toSorted((a, b) => {
                    return a.score - b.score
                })
            } else if (field === 'reviewer') {
                sorted = reviews.toSorted((a, b) => {
                    return a.reviewer.localeCompare(b.reviewer)
                })
            }
        } else if (sort === 'descending') {
            if (field === 'score') {
                sorted = reviews.toSorted((a, b) => {
                    return b.score - a.score
                })
            } else if (field === 'reviewer') {
                sorted = reviews.toSorted((a, b) => {
                    return b.reviewer.localeCompare(a.reviewer)
                })
            }
        }
        if (sorted) {
            res.json(sorted)
        }
        return res.status(404).send('This is not a sortable field.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createReview = async(req, res) => {
    try {
        const movie = await Movie.find({title: req.body.movie})
        const review = await new Review({
            score: req.body.score,
            comment: req.body.comment,
            reviewer: req.body.reviewer,
            url: req.body.url,
            movie_id: movie[0]._id
        })
        await review.save()
        return res.status(201).json({
            review
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateReview = async(req, res) => {
    try {
        let {id} = req.params
        const movie = await Movie.find({title:req.body.movie})
        let review = await Review.findByIdAndUpdate(id, {
            score: req.body.score,
            comment: req.body.comment,
            url: req.body.url,
            movie_id: movie[0]._id
        }, {new: true})
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error('Review not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteReview = async(req, res) => {
    try {
        const {id} = req.params
        const deleted = await Review.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Review deleted')
        }
        throw new Error('Review not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const searchByMovie = async(req, res) => {
    try {
        const {movieTitle} = req.params
        const movies = await Movie.find({})
        let movie
        for (let i=0; i<movies.length; i++) {
            if (movies[i].title.toLowerCase().includes(movieTitle.toLowerCase())) {
                movie = movies[i]
            }
        }
        const reviews = await Review.find({movie_id: movie._id})
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllReviews,
    getReviewById,
    getReviewByReviewer,
    sort,
    deleteReview,
    updateReview,
    createReview,
    searchByMovie
}