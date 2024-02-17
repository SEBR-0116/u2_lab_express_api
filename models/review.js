const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Review = new Schema(
	{
		score: {
			type: Number,
			required: true,
			min: 1,
			max: 5,
		},
		comment: {
			type: String,
			required: true,
		},
		movie_id: {
			type: Schema.Types.ObjectId,
			ref: 'Movie',
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('review', Review)
