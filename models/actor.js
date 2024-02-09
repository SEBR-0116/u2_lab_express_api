const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Actor = new Schema(
    {
        name: { type: String, required: true },
        birthday: { type: String, required: true },
        alive:{type: Boolean, required:true},
        image: { type: String, required: true },
        movie:{type: Schema.Types.ObjectId, ref: 'movie_id'}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Actor', Actor)
