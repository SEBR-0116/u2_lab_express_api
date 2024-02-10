const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const {Movie, Actor} = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("You're a wizard, Harry!")
  })

