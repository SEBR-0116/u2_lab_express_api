const { Schema } = require ('mongoose')

const Movie = new Schema (
    {
        title: { type: String, required: true},
        runtimeMins: { type: Number, required: true},
        rating: { type: String, required: true},
        description: { type: String, required: true},
        released: { type: String, required: true},
        mainActor: {type: Schema.Types.ObjectId, ref: 'Actor'},
        imageURL: { type: String, required: true}
    },

    { timestamps: true }
)

module.exports = Movie