const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    alive: Boolean,
})

module.exports = mongoose.model('Actor', actorSchema)