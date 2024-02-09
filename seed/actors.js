const db = require('../db')
const { Movie } = require('../models/movie')
const Actor  = require('../models/actor')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    
    const kaaka_kaaka_movie = await Movie.find({name:'kaaka Kaaka'})
    const leo_Movie = await Movie.find({name:'LEO'})
    const vtv_movie = await Movie.find({name:'VTV'})

    const actors = [
        {
            name: "Syriya",
            bob: "1985-02-09",
            image: "",
            nationality: "Indian",
            is_active: true,
            movie_id:kaaka_kaaka_movie.movie_id
        },
        {
            name: "Vijay",
            bob: "1980-09-15",
            image: "",
            nationality: "Indian",
            is_active: true,
            movie_id: leo_Movie.movie_id
        },
        {
            name: "Simbu",
            bob: "1970-08-12",
            image: "",
            nationality: "indian",
            is_active: true,
            movie_id: vtv_movie.movie_id
        }
      ]

        await Actor.insertMany(actors)
        console.log('Created some Actors !')
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()