const  { Schema } = require('mongoose')

const Actor = new Schema(
    {
        name: { type: String, required: true },
        date_of_birth: { type: Date, required: true },
        isAlive: { type: Boolean, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = Actor