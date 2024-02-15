const {Schema} = require('mongoose')

const Review = new Schema(
    {
        score: {type: Number, min: 0, max: 100},
        comment: {type: String, required: true},
        reviewer: {type: String, required: true},
        url: {type: String, required: true},
        movie_id: {type: Schema.Types.ObjectId, ref: 'Movie'}
    },
    {timestamps: true}
)

module.exports = Review