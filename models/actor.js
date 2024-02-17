const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Actor = new Schema(
	{
		name: { type: String, required: true },
		age: { type: Number, required: true },
		alive: { type: Boolean, required: true },
		hometown: { type: String, required: true },
		movie_id: { type: Schema.Types.ObjectId, ref: 'Movie' },
	},
	{ timestamps: true }
)

module.exports = mongoose.model('actor', Actor)
