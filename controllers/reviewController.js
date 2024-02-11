const { Review } = require('../models/')

const getMovieReviews = async (req, res) => {
    try {
        const reviews = await Review.find({movie: req.params.id})
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getMovieReviews,
}