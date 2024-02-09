const { Schema } = require('mongoose')

const actorSchema = new Schema(
  {
    name: { type: String, required: true },
    bob: { type: Date, default: Date.now },
    image: {type: String},
    nationality: {typr: String},
    is_active: {type: Boolean},
    movie_id: {type: Schema.Types.ObjectId,ref:'movie_id'}
  },
  { timestamps: true }
)

module.exports = actorSchema