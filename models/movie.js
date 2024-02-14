const{Schema} = require('mongoose')

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        runtime: {type: Number, required: true},
        rating: {type: Number, required: true},
        released: {type: Number, required: true},
        description: {type: String, required: true},
        // actor: {type: Schema.Types.ObjectId, ref: 'Actor'}
    },
    {timestamps: true}
)

module.exports = movieSchema