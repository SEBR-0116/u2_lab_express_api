const db = require('../db')
const {Movie} = require('../models/movie')

db.on('error', console.error.bind(console, 'Movies - MongoDB connection error:'))

const main = async() => {
    const aNewHope = await new Movie({
        title: 'A New Hope',
        runtime: 121,
        rating: 'good',
        released: 1977,
        description: 'Star Wars Episode 4',
        // actor: markHamill._id
    })
    aNewHope.save()
    const empireStrikesBack = await new Movie({
        title: 'The Empire Strikes Back',
        runtime: 124,
        rating: 'great',
        released: 1980,
        description: 'Star Wars Episode 5',
        // actor: markHamill._id
    })
    empireStrikesBack.save()
    const returnOfTheJedi = await new Movie({
        title: 'Return of the Jedi',
        runtime: 132,
        rating: 'good',
        released: 1977,
        description: 'Star Wars Episode 6',
        // actor: markHamill._id
    })
    returnOfTheJedi.save()


    const phantomMenace = await new Movie({
        title: 'The Phantom Menace',
        runtime: 133,
        rating: 'good',
        released: 1999,
        description: 'Star Wars Episode 1',
        // actor: ewanMcGregor._id
    })
    phantomMenace.save()
    const attackOfTheClones = await new Movie({
        title: 'Attack of the Clones',
        runtime: 142,
        rating: 'great',
        released: 2002,
        description: 'Star Wars Episode 2',
        // actor: ewanMcGregor._id
    })
    attackOfTheClones.save()
    const revengeOfTheSith = await new Movie({
        title: 'Revenge of the Sith',
        runtime: 140,
        rating: 'great',
        released: 2005,
        description: 'Star Wars Episode 3',
        // actor: ewanMcGregor._id
    })
    revengeOfTheSith.save()


    const forceAwakens = await new Movie({
        title: 'The Force Awakens',
        runtime: 121,
        rating: 'good',
        released: 2015,
        description: 'Star Wars Episode 7',
        // actor: daisyRidley._id
    })
    forceAwakens.save()
    const lastJedi = await new Movie({
        title: 'The Last Jedi',
        runtime: 121,
        rating: 'bad',
        released: 2017,
        description: 'Star Wars Episode 8',
        // actor: daisyRidley._id
    })
    lastJedi.save()
    const riseOfSkywalker = await new Movie({
        title: 'The Rise of Skywalker',
        runtime: 121,
        rating: 'not great',
        released: 2019,
        description: 'Star Wars Episode 9',
        // actor: daisyRidley._id
    })
    riseOfSkywalker.save()

    await Movie.insertMany(movies)
    console.log('created movies')
}

const run = async() => {
    await main()
    db.close()
}

run()