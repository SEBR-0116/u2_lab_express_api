const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Actor = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    livingStatus: { type: String, required: true },
    role: { type: String, required: true },
    characterName: { type: String, required: true },
    Image: { type: String, required: false },
    movieId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("actors", Actor);
