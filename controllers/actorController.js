const actors = require('../models/actors');
const Actor= require('../models/actors')

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find().populate('featured_in').sort('name')
        res.json(actors)
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

const getActorsById = async (req, res) => {
    try {
        const {id} = req.params
        const actors = await Actor.findById(id)
        if (actors) {
            return res.json(actors)
        }
        return res.status(404).send('Actor with the specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = {
    getAllActors,
    getActorsById
}