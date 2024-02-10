const express = require('express')
const app = express()
const movieRoutes = require('./routes/movieRoutes')
const actorRoutes = require('./routes/actorRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
require('./config/db')

app.use(express.json())

app.use('/movies', movieRoutes)
app.use('/actors', actorRoutes)
app.use('/reviews', reviewRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
