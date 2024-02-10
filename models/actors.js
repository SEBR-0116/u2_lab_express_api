const {Schema} = require('mongoose')

const Actor = new Schema(
    {
        name: {type: String, required: true },
        birthday: {type: String, required: true},
        deceased: {type: String, required: true},
    },


    { timestamps: true} 
)

module.exports = Actor