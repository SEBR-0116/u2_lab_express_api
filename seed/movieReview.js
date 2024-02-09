const db = require('../db')
const { Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {

    const movie_1 = await Movie.find({name:"kaaka Kaaka"})
    const movie_2 = await Movie.find({name:"LEO"})
    const movie_3 = await Movie.find({name:"VTV"})
    const movie_4 = await Movie.find({name:"Vikram"})
    const movie_5 = await Movie.find({name:"Jailer"})

    const reviews = [

        {
        score: 100,
        comments: "Good Movie",
        Movie_id: movie_1.Movie_id
        },
        {
        score: 99,
        comments: "Great Movie",
        Movie_id: movie_1.Movie_id
        },
        {
        score: 85,
        comments: "Good Movie",
        Movie_id: movie_2.Movie_id
        },
        {
        score: 90,
        comments: "Great Movie",
        Movie_id: movie_2.Movie_id
        },
        {
        score: 89,
        comments: "I like it",
        Movie_id: movie_3.Movie_id
        },
        {
        score: 92,
        comments: "My faourit Movie",
        Movie_id: movie_3.Movie_id
        },
        {
        score: 91,
        comments: "Superb Movie",
        Movie_id: movie_4.Movie_id
        },
        {
        score: 99,
        comments: "Great Movie",
        Movie_id: movie_4.Movie_id
        },
        {
        score: 100,
        comments: "Good Movie",
        Movie_id: movie_5.Movie_id
        },
        {
        score: 99,
        comments: "Great Movie",
        Movie_id: movie_5.Movie_id
        }
    ]

    await Review.insertMany(reviews)
    console.log('Created Movie reviews!')
  }
  
  const run = async () => {
    await main()
    db.close()
  }
  
  run()