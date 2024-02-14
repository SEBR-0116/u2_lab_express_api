const Actor = require('../models/Actor')

const getAllActors = async (req,res) =>{
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const deleteActorById = async (req,res) =>{
    try {
        const { id } = req.params;
        const deleted = await Movie.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Actor deleted")
        }
        throw new Error("Actor not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteAllActors = async () => {
    try {
        const result = await Actor.deleteMany(); // Delete all actors
        return result.deletedCount; // Return the count of deleted actors
    } catch (error) {
        throw new Error(`Error deleting actors: ${error.message}`); // Throw an error if deletion fails
    }
};


const getActorByName = async (req, res) => {
    try {
        const { name } = req.params
        const actor = await Actor.findOne({ name : name }) // Find movie by title
        if (!actor) {
            return res.status(404).send('Actor not found!')// If movie not found, send 404 response
        }
        res.json(actor)// Send movie as JSON response
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error') // Send 500 response for any server errors
    }
}
module.exports = {
    getActorByName,
    getAllActors,
    deleteActorById,
    deleteAllActors
}