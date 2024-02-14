const Review = require('../models/review')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getReviewById = async(req,res) => {
    try {
        const{id} = req.params
        const review = await Review.findById(id)
        // If there is a matching review, send back the review
        if (Review) {
            return res.json(review)
        }
        return res.status(404).send('Review not found')
    } catch (error) {
        // If there's another (ex. internal) error
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllReviews,
    getReviewById
}