const {Schema} = require('mongoose')

const Review = new Schema(
    {
        comments: { type: String, required: true},
        score: { type: Number, required: true},
        movieId: {type: Schema.Types.String, ref: 'Movie'}
    },

    { timestamps: true }
)

module.exports = Review