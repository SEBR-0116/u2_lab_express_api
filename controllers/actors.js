const Actors = require('../models/actors')

const getAllActors = async (req, res) => {
  try {
    const actors = await Actors.find()
    res.json(actors)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const deleteActor = async (req, res) => {
  try {
      const { id } = req.params
      const deleted = await Actors.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Actor deleted")
      }
      throw new Error("Actor not found")
  } catch (error) {
      return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllActors,
  deleteActor
}