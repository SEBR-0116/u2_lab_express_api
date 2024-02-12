const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Movie = new Schema(
    {
        title: { type: String, required: true },
        releaseYear: { type: Number, required: true },
        runTime: { type: String, required: true },
        rating:{type: String, required:true},
        reviews:[{type: Schema.Types.ObjectId, ref:"review_id"}]
    },
    { timestamps: true },
)

module.exports = mongoose.model('Movie', Movie)
