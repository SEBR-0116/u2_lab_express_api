const { Schema } = require('mongoose')

const Actor = new Schema (
    {
        name : { type: String, required: true },
        age : { type: Number, required: true },
        alive : { type: Boolean, required: true },
        image: { type: String, required: true },
        movie_id : {type: Schema.Types.ObjectId, ref: 'movie_id'}
    },
    { timestamps: true }
)

module.exports = Actor