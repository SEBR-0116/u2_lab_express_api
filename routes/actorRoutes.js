const express = require('express')
const router = express.Router()
const Actor = require('../models/actor')

router.get('/', async (req, res) => {
    const actors = await Actor.find()
    res.json(actors)
})

router.get('/:id', async (req, res) => {
    const actor = await Actor.findById(req.params.id)
    res.json(actor)
})

module.exports = router