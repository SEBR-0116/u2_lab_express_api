const Review  = require('../models/reviews')

const getAllReviews = async (req, res) => {
    try {
        const reviews = (await Review.find().populate('movie').sort('score')).reverse('score')
        res.json(reviews)
    } catch (e) {
        return res.status(500).send(e.message);
    } 
}

const getReviewsById = async (req, res) => {
    try {
        const {id} = req.params
        const reviews = await Review.findById(id)
        if (reviews) {
            return res.json(reviews)
        }
        return res.status(404).send('Review with the specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllReviews,
    getReviewsById
}