const { urlencoded } = require('express')
const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Actors = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        featured_in: { type: Schema.Types.ObjectId, ref: 'Movie' },
        image_path: { type: String, required: true },
        isAlive: { type: Boolean, required: true },
        ethinicity:{ type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Actor',Actors)