const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Movie = new Schema(
    {
        title : {type: String, required: true},
        director: {type: String, required: true},
        run_time : {type: Number, required: true},
        rating : {type: Number, required: true},
        year_released : {type: String, required: true},
        description : {type: String, required: true},
        image : {type: String, required: true},
        reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
        // actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
    },
    { timestamps: true }
)

module.exports = mongoose.model('movies', Movie)