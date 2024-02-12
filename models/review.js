const  { Schema } = require('mongoose')

const Review = new Schema(
    {
        score: { type: Number, required: true, min: 0, max: 100 },
        comment: { type: String, required: true },
        movie: { type: Schema.Types.ObjectId, ref: "Movie"},
    },
    { timestamps: true },
)

module.exports = Review