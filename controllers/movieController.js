const { Movie, Actor } = require('../models');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({}).populate({path: 'actors', select: 'name'})
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id).populate({path: 'actors', select: 'name'})
        if (movie) {
            return res.json(movie)
        }
        return res.status(404).send('Movie does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getMovieByTitle = async (req,res) => {
    try {
        const { title } = req.params
        const regex = new RegExp(title, 'i')
        const movies = await Movie.findOne({title: {$regex: regex}}).populate({path: 'actors', select: 'name'})
        if (movies) {
            return res.json(movies)
        }
        return res.status(404).send('Movie does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getMovieByRating = async (req,res) => {
    try {
        const { rating } = req.params
        const regex = new RegExp (rating, 'i')
        const movies = await Movie.find({rating: {$regex: regex}}).populate({path: 'actors', select: 'name'})
        if (movies == '') {
            return res.status(404).send('There are no movies with this rating')
        } else {
            return res.json(movies)
        }
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const sort = async (req, res) => {
    try {
        const field = req.query.field
        const sort = req.query.sort
        const movies = await Movie.find({}).populate({path: 'actors', select: 'name'})
        let sorted = ''
        if (sort === 'ascending') {
            if (field === 'title') {
                sorted = movies.toSorted((a, b) => {
                    return a.title.localeCompare(b.title)
                })
            } else if (field === 'runtime') {
                sorted = movies.toSorted((a, b) => {
                    return a.runtime - b.runtime
                })
            } else if (field === 'year') {
                sorted = movies.toSorted((a, b) => {
                    return a.year - b.year
                })
            } else if (field === 'rating') {
                sorted = movies.toSorted((a, b) => {
                    return a.rating.localeCompare(b.rating)
                })
            }
        } else if (sort === 'descending') {
            if (field === 'title') {
                sorted = movies.toSorted((a, b) => {
                    return b.title.localeCompare(a.title)
                })
            } else if (field === 'runtime') {
                sorted = movies.toSorted((a, b) => {
                    return b.runtime - a.runtime
                })
            } else if (field === 'year') {
                sorted = movies.toSorted((a, b) => {
                    return b.year - a.year
                })
            } else if (field === 'rating') {
                sorted = movies.toSorted((a, b) => {
                    return b.rating.localeCompare(a.rating)
                })
            }
        }
        if (sorted) {
            res.json(sorted)
        }
        return res.status(404).send('This is not a sortable field.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createMovie = async(req, res) => {
    try {
        let allActors = []
        for(let i=0; i< req.body.actors.length; i++) {
            const actor = await Actor.find({name: req.body.actors[i]}, {_id: 1})
            allActors = [...allActors, actor[0]._id]
        }
        const movie = await new Movie({
            title: req.body.title,
            runtime: req.body.runtime,
            year: req.body.year,
            rating: req.body.rating,
            description: req.body.description,
            actors: allActors,
            oscars: req.body.oscars,
            poster: req.body.poster
        })
        for (let i=0; i<allActors.length; i++) {
            const updateActors = await Actor.findByIdAndUpdate(allActors[i], {$push: {movies: movie._id}}, {new: true})
        }
        await movie.save()
        return res.status(201).json({
            movie
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateMovie = async(req, res) => {
    try {
        const {id} = req.params
        let allActors =[]

        if (req.body.actors.length > 0) {
            for(let i=0; i<req.body.actors.length; i++) {
                const actor = await Actor.find({name: req.body.actors[i]})
                allActors = [...allActors, actor[0]._id]
            }
        }
        
        const movie = await Movie.findByIdAndUpdate(id, {
            title: req.body.title,
            runtime: req.body.runtime,
            year: req.body.year,
            rating: req.body.rating,
            description: req.body.description,
            $push: {actors: allActors},
            oscars: req.body.oscars,
            poster: req.body.poster
        }, {new: true})
        if (allActors.length > 0 && typeof allActors !== 'undefined') {
            for (let i=0; i<allActors.length; i++) {
                const updateActors = await Actor.findByIdAndUpdate(allActors[i], {$push: {movies: movie._id}}, {new: true})
            }
        }
        if (movie) {
            return res.status(200).json(movie)
        }
        throw new Error('Movie not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

// const updateActors = async(req, res) => {
//     try {
//         const {id} = req.params
//         let allActors

//         if (req.body.actors) {
//             for(let i=0; i<req.body.actors.length; i++) {
//                 const oldMovie = await Movie.findById(id)
//                 for (let n=0; n<oldMovie.actors.length; n++) {
//                     const oldActor = await Actor.findByIdAndUpdate(oldMovie.actors[n]._id, {$pull: {movies: id}}, {new: true})
//                 }

//                 const actor = await Actor.find({name: req.body.actors[i]})
//                 allActors = [...allActors, actor[0]._id]
//             }
//         }
        
//         const movie = await Movie.findByIdAndUpdate(id, {
//             title: req.body.title,
//             runtime: req.body.runtime,
//             year: req.body.year,
//             rating: req.body.rating,
//             description: req.body.description,
//             actors: allActors,
//             oscars: req.body.oscars,
//             poster: req.body.poster
//         }, {new: true})
//         if (allActors.length > 0 && typeof allActors !== 'undefined') {
//             for (let i=0; i<allActors.length; i++) {
//                 const updateActors = await Actor.findByIdAndUpdate(allActors[i], {$push: {movies: movie._id}}, {new: true})
//             }
//         }
//         if (movie) {
//             return res.status(200).json(movie)
//         }
//         throw new Error('Movie not found')
//     } catch (error) {
//         return res.status(500).json({error: error.message})
//     }
// }

const deleteMovie = async(req, res) => {
    try {
        const {id} = req.params
        const deleted = await Movie.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send('Movie deleted')
        }
        throw new Error('Movie not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    getMovieByTitle,
    getMovieByRating,
    sort,
    createMovie,
    updateMovie,
    deleteMovie,
    updateActors
}