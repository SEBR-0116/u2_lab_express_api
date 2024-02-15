const { Actor, Movie } = require('../models');

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find({}).populate({path: 'movies', select: 'title'})
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getActorById = async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actor.findById(id).populate({path: 'movies', select: 'title'})
        if (actor) {
            return res.json(actor)
        }
        return res.status(404).send('Actor does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getActorByName = async (req,res) => {
    try {
        const { name } = req.params
        const actors = await Actor.find({}).populate({path: 'movies', select: 'title'})
        for (let i=0; i<actors.length; i++) {
            if (actors[i].name.toLowerCase().includes(name.toLowerCase())) {
                return res.json(actors[i])
            }
        }
        return res.status(404).send('Actor does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const sort = async(req, res) => {
    try {
        const field = req.query.field
        const sort = req.query.sort
        const actors = await Actor.find({}).populate({path: 'movies', select: 'title'})
        let sorted = ''
        if (sort === 'ascending' && field === 'name') {
                sorted = actors.toSorted((a, b) => {
                   return a.name.localeCompare(b.name)
                })
            } else if (sort === 'ascending' && field === 'age') {
                sorted = actors.toSorted((a, b) => {
                  return a.birthday - b.birthday
                })
            } else if (sort ==='descending' && field === 'name') {
                sorted = actors.toSorted((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            } else if (sort === 'descending' && field === 'age') {
                sorted = actors.toSorted((a, b) => {
                    return b.birthday - a.birthday
                })
            }
            if (sorted) {
                res.json(sorted)
            }
            return res.status(404).send('This is not a sortable field.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createActor = async(req, res) => {
    try {
        let allMovies = []
        if (req.body.movies) {
            for(let i=0; i<req.body.movies.length; i++) {
                const movie = await Movie.find({title: req.body.movies[i]})
                allMovies = [...allMovies, movie[0]._d]
            }
        }
        const actor = await new Actor({
            name: req.body.name,
            birthday: new Date(req.body.birthday),
            active: req.body.active,
            movies: allMovies,
            oscars: req.body.oscars,
            headshot: req.body.headshot
        })
        for (let i=0; i<allMovies.length; i++) {
                const updateMovies = await Movie.findByIdAndUpdate(allMovies[i], {$push: {actors: actor._id}}, {new: true})
            }
        await actor.save()
        return res.status(201).json({
            actor
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateActor = async(req, res) => {
    try {
        const {id} = req.params
        let allMovies = []
        if (req.body.movies) {
            for (let i=0; i< req.body.movies.length; i++) {
                const movie = await Movie.find({title: req.body.movies[i]})
                allMovies = [...allMovies, movie[0]._id]
            }
        }
        const actor = await Actor.findByIdAndUpdate(id, {
            name: req.body.name,
            birthday: Date(req.body.birthday),
            active: req.body.active,
            $push: {movies: allMovies},
            oscars: req.body.oscars,
            headshot: req.body.headshot
        }, {new: true})
        if (allMovies.length > 0 && typeof allMovies !== 'undefined') {
            for (let i=0; i<allMovies.length; i++) {
                const updateMovies = await Movie.findByIdAndUpdate(allMovies[i], {$push: {actors: actor._id}}, {new: true})
            }
        }
        if (actor) {
            return res.status(200).json(actor)
        }
        throw new Error('Actor not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteActor = async(req, res) => {
    try {
        const {id} = req.params
        const deleted = await Actor.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send('actor deleted')
        }
        throw new Error('Actor not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllActors,
    getActorById,
    getActorByName,
    sort,
    createActor,
    deleteActor,
    updateActor
}