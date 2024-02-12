const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Review = new Schema (
    {
        score : { type: Number, required: true },
        comment : { type: String, required: true },
        movie : {type: Schema.Types.ObjectId, ref: 'Movie'}
    },
    { timestamps: true }
)

module.exports = mongoose.model('reviews', Review)