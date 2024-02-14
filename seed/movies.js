const db = require('../db')
const Movie = require('../models/Movie')
const Actor = require('../models/Actor')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    try {
        // Retrieve actor IDs from the database
        const actors = await Actor.find({}, '_id')

    const movies = [
        {
            title:"The Avengers",
            runtime: "143 minutes",
            releaseYear: 2012,
            description: "Earth's mightiest heroes must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity.",
            cast: actors.map(actor => actor._id),
            image: 'https://en.wikipedia.org/wiki/File:The_Avengers_(2012_film)_poster.jpg'
        },

        {
            title:"American Hustle",
            runtime:"138 minutes",
            releaseYear: 2013,
            cast:actors.map(actor => actor._id),
            description: "A con man, Irving Rosenfeld, along with his seductive partner Sydney Prosser, is forced to work for a wild FBI agent Richie DiMaso.",
            image: 'https://en.wikipedia.org/wiki/File:American_Hustle_2013_poster.jpg'
        },
        {
            title:"Captain America: Civil War",
            releaseYear: 2016,
            runtime:"147 minutes",
            cast:actors.map(actor => actor._id),
            description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
            image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg'
        }

    ]
 
    await Movie.insertMany(movies)
    console.log("Movies created successfully!")
} catch (error) {
    console.error("Error creating movies:", error)
}
};
const run = async () => {
    await main()
    db.close()
}

run()