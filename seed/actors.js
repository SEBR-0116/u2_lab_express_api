const db = require('../db')
const {Actor, Movie} = require('../models')

db.on('error', console.error.bind(console, 'Actors - MongoDB connection error:'))

const main = async() => {
    const aNewHope = await Movie.find({ name: 'A New Hope' })
    const empireStrikesBack = await Movie.find({ name: 'The Empire Strikes Back' })
    const returnOfTheJedi = await Movie.find({ name: 'Return of the Jedi' })
    const phantomMenace = await Movie.find({ name: 'The Phantom Menace' })
    const attackOfTheClones = await Movie.find({ name: 'Attack of the Clones' })
    const revengeOfTheSith = await Movie.find({ name: 'Revenge of the Sith' })
    const forceAwakens = await Movie.find({ name: 'The Force Awakens' })
    const lastJedi = await Movie.find({ name: 'The Last Jedi' })
    const riseOfSkywalker = await Movie.find({ name: 'The Rise of Skywalker' })

    // One to many: actors to movies
    const actors = [
        {
            name: 'Mark Hamill',
            born: 1951,
            alive: true,
            movies: (
                aNewHope._id, 
                empireStrikesBack._id,
                returnOfTheJedi._id,
                forceAwakens._id,
                lastJedi._id,
                riseOfSkywalker._id
            )
        },
        {
            name: 'Carrie Fischer',
            born: 1956,
            alive: false,
            movies: (
                aNewHope._id,
                empireStrikesBack._id,
                returnOfTheJedi._id,
                forceAwakens._id,
                lastJedi._id,
                riseOfSkywalker._id
            )
        },
        {
            name: 'Harrison Ford',
            born: 1942,
            alive: true,
            movies: (
                aNewHope._id,
                empireStrikesBack._id,
                returnOfTheJedi._id,
                forceAwakens._id
            )
        },
        {
            name: 'Peter Mayhew',
            born: 1944,
            alive: false,
            movies: (
                aNewHope._id,
                empireStrikesBack._id,
                returnOfTheJedi._id,
                forceAwakens._id
            )
        },
        {
            name: 'Anthony Daniels',
            born: 1946,
            alive: true,
            movies: (
                phantomMenace._id,
                attackOfTheClones._id,
                revengeOfTheSith._id,
                aNewHope._id,
                empireStrikesBack._id,
                returnOfTheJedi._id,
                forceAwakens._id,
                lastJedi._id,
                riseOfSkywalker._id
            )
        },


        {
            name: 'Ewan McGregor',
            born: 1971,
            alive: true,
            movies: (
                phantomMenace._id,
                attackOfTheClones._id,
                revengeOfTheSith._id
            )
        },
        {
            name: 'Natalie Portman',
            born: 1981,
            alive: true,
            movies: (
                phantomMenace._id,
                attackOfTheClones._id,
                revengeOfTheSith._id
            )
        },
        {
            name: 'Hayden Christensen',
            born: 1981,
            alive: true,
            movies: (
                attackOfTheClones._id,
                revengeOfTheSith._id
            )
        },
        {
            name: 'Liam Neeson',
            born: 1952,
            alive: true,
            movies: phantomMenace._id
        },
        {
            name: 'Jake Lloyd',
            born: 1989,
            alive: true,
            movies: phantomMenace._id
        },
        {
            name: 'Ian McDiamond',
            born: 1944,
            alive: true,
            movies: (
                phantomMenace._id,
                attackOfTheClones._id,
                revengeOfTheSith._id
            )
        },
        {
            name: 'Christopher Lee',
            born: 1922,
            alive: false,
            movies: (
                attackOfTheClones._id,
                revengeOfTheSith._id
            )
        },
        {
            name: 'Samuel L. Jackson',
            born: 1948,
            alive: true,
            movies: (
                attackOfTheClones._id,
                revengeOfTheSith._id
            )
        },


        {
            name: 'Daisy Ridley',
            born: 1992,
            alive: true,
            movies: (
                forceAwakens._id,
                lastJedi._id,
                riseOfSkywalker._id
            )
        },
        {
            name: 'John Boyega',
            born: 1992,
            alive: false,
            movies: (
                forceAwakens._id,
                lastJedi._id,
                riseOfSkywalker._id
            )
        },
        {
            name: 'Oscar Isaac',
            born: 1979,
            alive: true,
            movies: (
                forceAwakens._id,
                lastJedi._id,
                riseOfSkywalker._id
            )
        },
        {
            name: 'Adam Driver',
            born: 1983,
            alive: false,
            movies: (
                forceAwakens._id,
                lastJedi._id,
                riseOfSkywalker._id
            )
        },

    ]

    await Actor.insertMany(actors)
    console.log('created actors')
}

const run = async() => {
    await main()
    db.close()
}

run()