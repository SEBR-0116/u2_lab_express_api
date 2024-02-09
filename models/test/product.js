const { Schema } = require('mongoose')

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    bob: { type: Date, default: Date.now },
    image: {type: String},
    nationality: {typr: String},
    is_active: {type: Boolean},
    brand_id: { type: Schema.Types.ObjectId, ref: 'brand_id' },
  },
  { timestamps: true }
)

module.exports = productSchema