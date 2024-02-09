const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://denesh555:DyzJgVY0HxoDVGlB@cluster0.ctnnmmg.mongodb.net/moviesDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })


mongoose.set('debug',true)
const db = mongoose.connection

module.exports = db
