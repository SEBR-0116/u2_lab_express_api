const db = require('../db')
const { Movie } = require('./models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//attached to db; error alert if anything goes wrong

const main = async () => {
    const movies = [
        {
            title: 'Before We Go',
            runtimeInMin: 95,
            rating: 'PG-13',
            yearReleased: 2014,
            description: "Two strangers stuck in Manhattan for the night grow into each other's most trusted confidants when an evening of unexpected adventure forces them to confront their fears and take control of their lives.",
            posterImg: 'https://m.media-amazon.com/images/M/MV5BNjMyZmQxZTktZTMyYy00NWE3LWFlODctOTdjY2RkNTUwYmE5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg'
        },
        {
            title: 'A Cinderella Story',
            runtimeInMin: 95,
            rating: 'PG',
            yearReleased: 2004,
            description: "Routinely exploited by her wicked stepmother, the downtrodden Samantha Montgomery is excited about the prospect of meeting her Internet beau at the school's Halloween dance",
            posterImg: 'https://m.media-amazon.com/images/M/MV5BMTA1NDI0OTkwNDNeQTJeQWpwZ15BbWU3MDQ3Nzc1MjE@._V1_.jpg'
        },
        {
            title: 'The Princess Diaries',
            runtimeInMin: 110,
            rating: 'G',
            yearReleased: 2001,
            description: "The film follows Mia Thermopolis (Hathaway), a shy American teenager who learns she is heiress to the throne of a European kingdom",
            posterImg: 'https://lumiere-a.akamaihd.net/v1/images/p_theprincessdiaries_19875_2ef7e437.jpeg'
        },
        {
            title: 'The Prince N Me',
            runtimeInMin: 111,
            rating: 'PG',
            yearReleased: 0,
            description: "At college Paige meets Eddie, a student from Denmark, whom she first dislikes but later accepts, likes, and loves; he proves to be Crown Prince Edvard",
            posterImg: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p34207_v_v13_aj.jpg'
        },
        {
            title: 'The Gray Man',
            runtimeInMin: 122,
            rating: 'PG-13',
            yearReleased: 2022,
            description: "When the CIA's most skilled operative, whose true identity is known to none, accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head, setting off a series of events",
            posterImg: 'https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg'
        },
        {
            title: 'The Notebook',
            runtimeInMin: 121,
            rating: 'PG-13',
            yearReleased: 2004,
            description: "Two young lovers are torn apart by war and class differences in the 1940s in this adaptation of Nicholas Sparks's bestselling novel",
            posterImg: 'https://m.media-amazon.com/images/M/MV5BNzc3Mzg1OGYtZjc3My00Y2NhLTgyOWUtYjRhMmI4OTkwNDg4XkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_.jpg'
        }
    ]
    await Movie.insertMany(movies)
    console.log("Created list of movies!")
}
const run = async () => {
    await main()
    db.close()
}

run()