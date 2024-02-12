const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Movie = new Schema(
    {
        title: {type: String, required: true},
        runtimeInMin: {type: Number},
        rating: {type: String},
        yearReleased: {type: Number},
        description: {type: String},
        posterImg: {type: String}
    },
    { timestamps: true }
)

module.exports = mongoose.model('movies', Movie)
// alt:
// module.exports = Movie