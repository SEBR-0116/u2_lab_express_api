const db = require('../db')
const { Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {

    // const movie_1 = await Movie.find({name:"kaaka Kaaka"})
    // const movie_2 = await Movie.find({name:"LEO"})
    // const movie_3 = await Movie.find({name:"VTV"})
    // const movie_4 = await Movie.find({name:"Vikram"})
    // const movie_5 = await Movie.find({name:"Jailer"})
    
    const reviews = [

        {
        score: 100,
        comments: "Good Movie",
        movie_id: "65c9673cf48b17d551096c64"
        },
        {
        score: 99,
        comments: "Great Movie",
        movie_id: "65c9673cf48b17d551096c64"
        },
        {
          score: 100,
          comments: "Good Movie",
          movie_id: "65c9673cf48b17d551096c64"
          },
          {
          score: 99,
          comments: "Great Movie",
          movie_id: "65c9673cf48b17d551096c64"
          },
        {
        score: 85,
        comments: "Good Movie",
        movie_id: "65c9673cf48b17d551096c65"
        },
        {
        score: 90,
        comments: "Great Movie",
        movie_id: "65c9673cf48b17d551096c65"
        },
        {
        score: 89,
        comments: "I like it",
        movie_id: "65c9673cf48b17d551096c66"
        },
        {
        score: 92,
        comments: "My faourit Movie",
        movie_id: "65c9673cf48b17d551096c66"
        },
        {
        score: 89,
        comments: "I like it",
        movie_id: "65c9673cf48b17d551096c66"
        },
        {
        score: 92,
        comments: "My faourit Movie",
        movie_id: "65c9673cf48b17d551096c66"
        },
        {
        score: 91,
        comments: "Superb Movie",
        movie_id: "65c9673cf48b17d551096c68"
        },
        {
        score: 99,
        comments: "Great Movie",
        movie_id: "65c9673cf48b17d551096c68"
        },
        {
        score: 100,
        comments: "Good Movie",
        movie_id: "65c9673cf48b17d551096c67"
        },
        {
        score: 99,
        comments: "Great Movie",
        movie_id: "65c9673cf48b17d551096c67"
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