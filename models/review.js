const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Review = new Schema(
    {
        movie_id: { type: Schema.Types.ObjectId, ref: 'movie_id'},
        score: {type: Number, min: 1, max: 5, required: true},
        comment: {type: String}
    },
    { timestamps: true}
)

module.exports = mongoose.model('reviews', Review)

// alt:
// module.exports = Review