const { Schema } = require('mongoose')

const Review = new Schema (
    {
        score : { type: Number, required: true },
        comment : { type: String, required: true },
        movie_id : {type: Schema.Types.ObjectId, ref: 'movie_id'}
    },
    { timestamps: true }
)

module.exports = Review