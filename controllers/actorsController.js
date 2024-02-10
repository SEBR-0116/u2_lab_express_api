const { Actor } = require('../models')

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const getOneActor = async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actor.findById(id)
        actor ? res.json(actor) : res.status(404).send('Actor find by id error')
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllActors,
    getOneActor
}