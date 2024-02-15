const {Schema} = require('mongoose')

const Oscars = new Schema(
    {
        nominations: [{type: String, required: false}],
        wins: [{type: String, required: false}]
    }
)

const Movie = new Schema(
    {
        title: {type: String, required: true},
        runtime: {type: Number, required: true},
        year: {type: Number, required: true},
        rating: {type: String, required: true},
        description: {type: String, required: true},
        actors: [{type: Schema.Types.ObjectId, ref: 'Actor'}],
        oscars: Oscars,
        poster: {type: String, required: false}
    },
    {timestamps: true}
)

module.exports = Movie