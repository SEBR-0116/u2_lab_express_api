const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const ActorSchema = new Schema(
    {
        name: { type: String, required: true },
        age:{ type:Number,require:true},
        alive:{type:Boolean,require:true},
        movie:{type: Array,default:[],required: true },
        image: { type: String, require: true }, 

    },
    { timestamps: true },
)

module.exports = mongoose.model('actors',ActorSchema)