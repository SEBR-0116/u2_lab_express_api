const Reviews = require('../models/reviews')

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find()
    res.json(reviews)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Reviews(req.body)
    await review.save()
    return res.status(201).json({
        review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  }

const deleteReview = async (req, res) => {
  try {
      const { id } = req.params
      const deleted = await Reviews.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Review deleted")
      }
      throw new Error("Review not found")
  } catch (error) {
      return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllReviews,
  deleteReview,
  createReview
}