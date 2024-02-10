
const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
   try {
      const movies = await Movie.find({})
      res.json(movies)
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const getOneMovie = async (req, res) => {
   try {
      const { title } = req.params
      const movie = await Movie.findOne({title: title})
      .populate('actors')
      .exec()
      console.log(movie)
      if (movie) {
         return res.json(movie)
      }
      return res.status(404).send('Movie cannot be found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const createMovie = async (req, res) => {
   try{
   const movie = await Movie.create(req.body)
   return res.status(201).json({
      movie,
   })
   } catch (e) {
      return res.status(500).json({ error: e.message })
   }
}

const updateMovie = async (req, res) => {
   try {
      let id = req.params.id
      let movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
      if (movie) {
         return res.status(200).json(movie)
      }
      throw new Error('Movie not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const deleteMovie = async (req, res) => {
   try {
      const id = req.params.id
      let movie = await Movie.findByIdAndDelete(id)
      if (movie) {
         return res.status(200).json(movie)
      }
      throw new Error('Movie not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}



module.exports = {
   getAllMovies,
   getOneMovie,
   createMovie,
   updateMovie,
   deleteMovie
}