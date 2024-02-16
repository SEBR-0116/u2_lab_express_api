const { Schema } = require('mongoose')

const Oscars = new Schema(
    {
        nominations: [{
            category: {type: String, required: false},
            year: {type: Number, required: false},
            work: {type: String, required: false}
        }],
        wins: [{
            category: {type: String, required: false},
            year: {type: Number, required: false},
            work: {type: String, required: false}
        }]
    }
)

const Actor = new Schema(
    {
        name: {type: String, required: true},
        birthday: {type: Date, required: true},
        active: {type: Boolean, required: true},
        movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
        oscars: Oscars,
        headshot: {type: String, required: false}
    },
    {timestamps: true}
)

module.exports = Actor