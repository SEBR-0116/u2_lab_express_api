const db = require('../db')
const Review = require('../models/review')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const theHoldovers = await Movie.findOne({title: 'The Holdovers'})
    const americanFiction = await Movie.findOne({title: 'American Fiction'})
    const theZoneOfInterest = await Movie.findOne({title: 'The Zone of Interest'})
    const barbie = await Movie.findOne({title: 'Barbie'})
    const oppenheimer = await Movie.findOne({title: 'Oppenheimer'})
    const poorThings = await Movie.findOne({title: 'Poor Things'})
    const pastLives = await Movie.findOne({title: 'Past Lives'})
    const anatomyOfAFall = await Movie.findOne({title: 'Anatomy of a Fall'})
    const maestro = await Movie.findOne({title: 'Maestro'})
    const killers = await Movie.findOne({title: 'Killers of the Flower Moon'})

    const reviews = [
        {
            score : 9,
            comment : "The format may be unsurprising but there is nothing unsurprising about just how good and enjoyable this is... this is the kind of bittersweet, character-dialogue driven piece they just don't do anymore",
            movie : theHoldovers._id
        },
        {
            score : 9,
            comment : "It is the genius of Paul Giamatti to make us, over the course of this great movie, not just re-evaluate and learn to respect this mess of a man but actually... to love him.",
            movie : theHoldovers._id 
        },
        {
            score : 9,
            comment : "American Fiction is a funny, heartwarming tale that holds a mirror up to its viewers; a well deserved best picture contender.",
            movie : americanFiction._id
        },
        {
            score : 8,
            comment : "Diversity as a machine for laundering progressive bourgeois guilt is a sound target for a satirical kicking, and American Fiction would be a hoot if that were all it had on its mind.",
            movie : americanFiction._id  
        },
        {
            score : 10,
            comment : "I left it shaken and stricken; it stayed with me, stubbornly, over the months that followed.",
            movie : theZoneOfInterest._id 
        },
        {
            score : 9,
            comment : "The horror is unseen but underlying, and all the more arresting because of it",
            movie : theZoneOfInterest._id   
        },
    ]
    // Check for existing reviews to prevent duplicates
    const existingReviews = await Review.find({ $or: reviews.map(review => ({ score: review.score, comment: review.comment, movie: review.movie })) })

    // Filter out reviews that already exist
    const newReviews = reviews.filter(review => !existingReviews.some(existingReview =>
        existingReview.score === review.score &&
        existingReview.comment === review.comment &&
        existingReview.movie.toString() === review.movie.toString()
    ));

    if (newReviews.length > 0) {
        await Review.insertMany(newReviews)
        console.log(`${newReviews.length} new reviews inserted!`)
    } else {
        console.log('No new reviews to insert.')
    }
}
const run = async () => {
    await main()
    db.close()
};

run()