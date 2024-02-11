const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Actor = new Schema (
    {
        name : { type: String, required: true },
        age : { type: Number, required: true },
        alive : { type: Boolean, required: true },
        image: { type: String, required: true },
        movie : {type: Schema.Types.ObjectId, ref: 'Movie'}
    },
    { timestamps: true }
)

module.exports = mongoose.model('actors', Actor)