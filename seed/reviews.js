const db = require('../db')
const Review = require('../models/review')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const theHoldovers = await Movie.find({name: 'The Holdovers'})
    const americanFiction = await Movie.find({name: 'American Fiction'})
    const theZoneOfTruth = await Movie.find({name: 'The Zone of Truth'})
    const barbie = await Movie.find({name: 'Barbie'})
    const oppenheimer = await Movie.find({name: 'Oppenheimer'})
    const poorThings = await Movie.find({name: 'Poor Things'})
    const pastLives = await Movie.find({name: 'Past Lives'})
    const anatomyOfAFall = await Movie.find({name: 'Anatomy of a Fall'})
    const maestro = await Movie.find({name: 'Maestro'})

    const reviews = [
        {
            score : 9,
            comment : "The format may be unsurprising but there is nothing unsurprising about just how good and enjoyable this is... this is the kind of bittersweet, character-dialogue driven piece they just don't do anymore",
            movie_id : theHoldovers._id
        },
        {
            score : 9,
            comment : "It is the genius of Paul Giamatti to make us, over the course of this great movie, not just re-evaluate and learn to respect this mess of a man but actually... to love him.",
            movie_id : theHoldovers._id 
        },
        {
            score : 9,
            comment : "American Fiction is a funny, heartwarming tale that holds a mirror up to its viewers; a well deserved best picture contender.",
            movie_id : americanFiction._id
        },
        {
            score : 8,
            comment : "Diversity as a machine for laundering progressive bourgeois guilt is a sound target for a satirical kicking, and American Fiction would be a hoot if that were all it had on its mind.",
            movie_id : americanFiction._id  
        },
        {
            score : 10,
            comment : "I left it shaken and stricken; it stayed with me, stubbornly, over the months that followed.",
            movie_id : theZoneOfTruth._id 
        },
        {
            score : 9,
            comment : "The horror is unseen but underlying, and all the more arresting because of it",
            movie_id : theZoneOfTruth._id   
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