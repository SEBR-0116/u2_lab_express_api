const Plant = require('../models/plant');

const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find()
        res.json(plants)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllPlants
}