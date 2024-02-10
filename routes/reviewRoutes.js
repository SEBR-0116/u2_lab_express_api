const express = require('express')
const router = express.Router()
const Review = require('../models/review')

router.get('/', async (req, res) => {
    const reviews = await Review.find()
    res.json(reviews)
})

router.get('/:id', async (req, res) => {
    const review = await Review.findById(req.params.id)
    res.json(review)
})

module.exports = router