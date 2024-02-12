const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const MovieSchema = new Schema(
    {
        title: { type: String, required: true },
        runtime:{ type: String, required: true },
        releaseYear: { type: Number, required: true },
        description:{ type: String, required: true },
        image: { type: String, required: true },
        cast:[{
            type:Schema.Types.ObjectId, ref:'Actor'
        }],
        Review:[
            {
               type:Schema.Types.ObjectId ,ref : 'Reviews'
            }
        ]
        },
    
    { timestamps: true },
)

module.exports = mongoose.model('movies',MovieSchema)
