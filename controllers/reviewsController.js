const { Review } = require('../models')

const getAllReviews = async (req, res) => {
   try {
      const reviews = await Review.find({})
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
      return res.status(404).send('Review cannot be found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const createReview = async (req, res) => {
   try{
   const review = await new Review(req.body)
   await review.save()
   return res.status(201).json({
      review,
   })
   } catch (e) {
      return res.status(500).json({ error: e.message })
   }
}

const updateReview = async (req, res) => {
   try {
      let id = req.params.id
      let review = await Review.findByIdAndUpdate(id, req.body, { new: true })
      if (review) {
         return res.status(200).json(review)
      }
      throw new Error('Review not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const deleteReview = async (req, res) => {
   try {
      const id = req.params.id
      let review = await Review.findByIdAndDelete(id)
      if (review) {
         return res.status(200).json(review)
      }
      throw new Error('Review not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const getOneReview = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findById(id)
         review ? res.json(review) : res.status(404).send('Review find by id error')
    } catch (e) {
        res.status(500).send(e.message)
    }
}
module.exports = {
   getAllReviews,
   getOneReview,
   getReviewById,
   createReview,
   updateReview,
   deleteReview
}