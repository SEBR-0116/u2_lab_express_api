const db = require('../db')
const Review = require('../models/review')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const theHoldovers = await Movie.find({title: 'The Holdovers'})
    const americanFiction = await Movie.find({title: 'American Fiction'})
    const theZoneOfInterest = await Movie.find({title: 'The Zone of Interest'})
    const barbie = await Movie.find({title: 'Barbie'})
    const oppenheimer = await Movie.find({title: 'Oppenheimer'})
    const poorThings = await Movie.find({title: 'Poor Things'})
    const pastLives = await Movie.find({title: 'Past Lives'})
    const anatomyOfAFall = await Movie.find({title: 'Anatomy of a Fall'})
    const maestro = await Movie.find({title: 'Maestro'})
    const killers = await Movie.find({title: 'Killers of the Flower Moon'})

    const reviews = [
        {
            score : 9,
            comment : "The format may be unsurprising but there is nothing unsurprising about just how good and enjoyable this is... this is the kind of bittersweet, character-dialogue driven piece they just don't do anymore",
            movie : theHoldovers[0]._id
        },
        {
            score : 9,
            comment : "It is the genius of Paul Giamatti to make us, over the course of this great movie, not just re-evaluate and learn to respect this mess of a man but actually... to love him.",
            movie : theHoldovers[0]._id 
        },
        {
            score : 9,
            comment : "American Fiction is a funny, heartwarming tale that holds a mirror up to its viewers; a well deserved best picture contender.",
            movie : americanFiction[0]._id
        },
        {
            score : 8,
            comment : "Diversity as a machine for laundering progressive bourgeois guilt is a sound target for a satirical kicking, and American Fiction would be a hoot if that were all it had on its mind.",
            movie : americanFiction[0]._id  
        },
        {
            score : 10,
            comment : "I left it shaken and stricken; it stayed with me, stubbornly, over the months that followed.",
            movie : theZoneOfInterest[0]._id 
        },
        {
            score : 9,
            comment : "The horror is unseen but underlying, and all the more arresting because of it",
            movie : theZoneOfInterest[0]._id   
        },
    ]
    await Review.insertMany(reviews)
    console.log('Inserted reviews!')
}
const run = async () => {
    await main()
    db.close()
};

run()