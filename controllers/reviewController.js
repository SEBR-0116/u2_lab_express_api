const Review = require('../models/review')

const getAllReviews = async (req, res) => {
	try {
		const reviews = await Review.find()
		res.json(reviews)
	} catch (e) {
		return res.status(500).send(e.message)
	}
}

const getReviewById = async (req, res) => {
	try {
		const { id } = req.params
		const review = await Review.findById(id)
		if (review) {
			return res.json(review)
		}
		return res.status(404).send('Review with the specified ID does not exist.')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllReviews,
	getReviewById,
}
