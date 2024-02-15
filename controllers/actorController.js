const { Actor, Movie } = require('../models');

const getAllActors = async (req,res) => {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllActors,
}