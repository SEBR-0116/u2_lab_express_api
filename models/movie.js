const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Movie = new Schema(
	{
		title: { type: String, required: true },
		runTime: { type: Number, required: true },
		rating: { type: Number, required: true },
		yearReleased: { type: Number, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
	},
	{ timestamps: true }
)

module.exports = mongoose.model('movie', Movie)
