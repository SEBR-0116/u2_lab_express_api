const { Schema } = require('mongoose')

const actorSchema = new Schema(
  {
    name: { type: String, required: true },
    dob: { type: Date, default: Date.now },
    gender: { type: String, required: false },
    rank:{ type: Number},
    hit_blockbuster:{ type: Number},
    image: {type: String},
    nationality: {type: String},
    is_active: {type: Boolean},
    movie_id: {type: Schema.Types.ObjectId,ref:'movie_id'}
  },
  { timestamps: true }
)

module.exports = actorSchema