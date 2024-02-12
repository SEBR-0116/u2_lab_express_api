const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Review = new Schema(
    {
        movie_id: { type:Schema.Types.ObjectId,ref:'Movie'},
        sourceName: { type: String, required: true },
        score: { type: Number, required: true },
        comments:{ type: Array,default:[],required: true },
        image: { type: String, required: true },

    },
    { timestamps: true },
)
module.exports = mongoose.model('reviews',Review)