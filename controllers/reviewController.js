const { Review } = require('../models/')

const getMovieReviews = async (req, res) => {
    try {
        const reviews = await Review.find({movie: req.params.id})
        if (req.query.sorted == "highToLow") {
            res.json(reviews.sort((review1, review2) => (review1.score < review2.score) ? 1 : review1.score > review2.score ? -1 : 0))
        } else if (req.query.sorted == "lowToHigh") {
            res.json(reviews.sort((review1, review2) => (review1.score > review2.score) ? 1 : review1.score < review2.score ? -1 : 0))
        } else {
            res.json(reviews)
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovieReviewsById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.reviewId)
        if (review) {
            res.json(review)
        }
    } catch (error) {
        return res.status(500).send("Review with that ID does not exist");
    }
}

const createReview = async (req, res) => {
    try {
        const review = await new Review(req.body)
        await review.save()
        return res.status(201).json({
            review,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateReview = async (req, res) => {
    try {
        let { reviewId } = req.params;
        let review = await Review.findByIdAndUpdate(reviewId, req.body, { new: true })
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error("Review not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const deleted = await Review.findByIdAndDelete(reviewId)
        if (deleted) {
            return res.status(200).send("Review deleted");
        }
        throw new Error("Review not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getMovieReviews,
    getMovieReviewsById,
    createReview,
    updateReview,
    deleteReview
}