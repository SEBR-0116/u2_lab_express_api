const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Actor = new Schema(
    {
        movie_id: { type: Schema.Types.ObjectId, ref: 'movie_id'},
        name: {type: String, required: true},
        age: {type: Number},
        alive: {type: Boolean},
        actorImg: {type: String}
    },
    { timestamps: true }
)

module.exports = mongoose.model('actors', Actor)
// alt:
// module.exports = Actor