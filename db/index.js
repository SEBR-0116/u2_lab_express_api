const mongoose = require('mongoose')
const Movie = require('./models/movie')
const Actor = require('./models/actor')
const Review = require('./models/review')

mongoose.connect('mongodb://localhost/moviesDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err))

const moviesData = [
    { title: 'Scott Pilgrim vs. the World', runtime: 112, rating: 7.6, yearReleased: 2010, description: 'Action/Comedy'},
    { title: 'Kairo (Pulse)', runtime: 119, rating: 6.5, yearReleased: 2001, description: 'Horror/Mystery'},
    { title: 'Enter the Void', runtime: 161, rating: 7.2, yearReleased: 2009, description: 'Drama/Fantasy'}
]

const actorsData = [
    { name: 'Michael Cera', age: 35, alive: true },
    { name: 'Kumiko Aso', age: 45, alive: true },
    { name: 'Nathaniel Brown', age: 35, alive: true }
]

const reviewsData = [
    { score: 8, comment: 'Great movie!' },
    { score: 5, comment: 'It was alright.' },
    { score: 2, comment: 'What was I even watching?' }
]

async function populateDB() {
    try {
        await Movie.deleteMany()
        await Actor.deleteMany()
        await Review.deleteMany()

        const movies = await Movie.insertMany(moviesData)

        const movieId = movies[0]._id

        const actors = await Actor.insertMany(actorsData)

        const reviews = await Review.insertMany(reviewData)

        console.log('Database populated successfully')
    } catch (error) {
        console.error('Error populating database:', error)
    } finally {
        mongoose.disconnect()
    }
}

populateDB()