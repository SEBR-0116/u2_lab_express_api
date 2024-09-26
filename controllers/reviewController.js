const { Review, Movie } = require('../models');

const getAllReviews = async (req,res) => {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllReviews,
}