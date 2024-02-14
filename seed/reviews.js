const db = require('../db')
const {Movie, Review} = require('../models')

db.on('error', console.error.bind(console, 'Reviews - MongoDB connection error:'))

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
    
    // One to many: movies to reviews
    const reviews = [
        {
            score: 4,
            comment: 'Review 1 - ANH',
            movie: aNewHope._id
        },
        {
            score: 5,
            comment: 'Review 2 - ANH',
            movie: aNewHope._id
        },
        {
            score: 5,
            comment: 'Review 3 - ESB',
            movie: empireStrikesBack._id
        },
        {
            score: 5,
            comment: 'Review 4 - ESB',
            movie: empireStrikesBack._id
        },
        {
            score: 5,
            comment: 'Review 5 - ROTJ',
            movie: returnOfTheJedi._id
        },
        {
            score: 4,
            comment: 'Review 6 - ROTJ',
            movie: returnOfTheJedi._id
        },


        {
            score: 3,
            comment: 'Review 7 - PM',
            movie: phantomMenace._id
        },
        {
            score: 4,
            comment: 'Review 8 - PM',
            movie: phantomMenace._id
        },
        {
            score: 4,
            comment: 'Review 9 - AOTC',
            movie: attackOfTheClones._id
        },
        {
            score: 5,
            comment: 'Review 10 - AOTC',
            movie: attackOfTheClones._id
        },
        {
            score: 5,
            comment: 'Review 11 - ROTS',
            movie: revengeOfTheSith._id
        },
        {
            score: 4,
            comment: 'Review 12 - ROTS',
            movie: revengeOfTheSith._id
        },



        {
            score: 4,
            comment: 'Review 13 - FA',
            movie: forceAwakens._id
        },
        {
            score: 5,
            comment: 'Review 14 - FA',
            movie: forceAwakens._id
        },
        {
            score: 5,
            comment: 'Review 15 - LJ',
            movie: lastJedi._id
        },
        {
            score: 5,
            comment: 'Review 16 - LJ',
            movie: lastJedi._id
        },
        {
            score: 5,
            comment: 'Review 17 - ROS',
            movie: riseOfSkywalker._id
        },
        {
            score: 4,
            comment: 'Review 18 - ROS',
            movie: riseOfSkywalker._id
        },
    ]

    await Review.insertMany(reviews)
    console.log('created reviews')
}

const run = async() => {
    await main()
    db.close()
}

run()