const db = require('../db')
const { Review, Movie  } = require('./models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//attached to db; error alert if anything goes wrong

const main = async () => {
    const beforeWeGo = await Movie.find({ name: 'Before We Go' })
    const aCinderellaStory = await Movie.find({ name: 'A Cinderella Story' })
    const thePrincessDiaries = await Movie.find({ name: 'The Princess Diaries' })
    const thePrinceNMe = await Movie.find({ name: 'The Prince N Me' })
    const theGrayMan = await Movie.find({ name: 'The Gray Man' })
    const theNotebook = await Movie.find({ name: 'The Notebook' })

    const reviews = [
        {
            movie_id: beforeWeGo[0]._id,
            score: 4.5,
            comment: 'Touching movie that showcases how real a spontaneous connection can be when people chose to open their hearts'
        },
        {
            movie_id: aCinderellaStory[0]._id,
            score: 3,
            comment: 'Sweet movie where you vouch for the protagonist and relish in her victory and growth'
        },
        {
            movie_id: thePrincessDiaries[0]._id,
            score: 3,
            comment: 'Childhood dream for any young lady'
        },
        {
            movie_id: thePrinceNMe[0]._id,
            score: 3,
            comment: 'Romantic'
        },
        {
            movie_id: theGrayMan[0]._id,
            score: 3,
            comment: 'Has the visual effects every modern movie should have'
        },
        {
            movie_id: theNotebook[0]._id,
            score: 4,
            comment: 'Heart grabbing'
        }
    ]
    await Review.insertMany(reviews)
    console.log("Created list of reviews!")
}
const run = async () => {
    await main()
    db.close()
}

run()