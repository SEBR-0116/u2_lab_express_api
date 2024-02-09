const { Schema } = require('mongoose')

const movieActorSchema = new Schema(
  {
    movie_id: { type: Schema.Types.ObjectId, ref: 'movie' },
    actor_id: { type: Schema.Types.ObjectId, ref:'actor' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('actors',actorSchema)