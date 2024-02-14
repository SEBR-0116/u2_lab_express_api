const{Schema} = require('mongoose')

const actorSchema = new Schema(
    {
        name: {type: String, required: true},
        born: {type: Number, required: true},
        alive: {type: Boolean, required: true},
        movie: {type: [{type: Schema.Types.ObjectId, ref: 'Movie'}], required: true},
    },
    {timestamps: true}
)

module.exports = actorSchema