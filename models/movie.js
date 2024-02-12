const  { Schema } = require('mongoose')

const Movie = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        runtime_in_minutes: { type: Number, required: true },
        date_released: { type: Date, required: true },
        cast: { type: [{type: Schema.Types.ObjectId, ref: "Actor"}], required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = Movie