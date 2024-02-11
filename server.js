const express = require('express');
const db = require('./db');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json())
app.use(logger('dev'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req,res) => {
    res.send("Welcome to GAMEMDB")
})