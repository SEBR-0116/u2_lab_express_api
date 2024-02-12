const { urlencoded } = require('express')
const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Reviews = new Schema(
    {
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
        score: { type: Number, required: true },
        comment: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Review', Reviews)