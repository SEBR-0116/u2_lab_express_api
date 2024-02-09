const db = require('../db')
const { Actor, Movie,movieActor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {


const movies = [

    {
        title: "kaaka Kaaka",
        director: "GVM",
        runtime: 2.35,
        rating: 5,
        year_release: "2005-02-09",
        description: "Action",
        gener: "Action",
        image: ""
    },
    {
        title: "LEO",
        director: "Logesh",
        runtime: 2.65,
        rating: 5,
        year_release: "2024-02-09",
        description: "Action",
        gener: "Action",
        image: ""
    },
    {
        title: "VTV",
        director: "GVM",
        runtime: 2.15,
        rating: 5,
        year_release: "2008-02-09",
        description: "Action",
        gener: "Action",
        image: ""
    }


]

await Movie.insertMany(movies)
console.log('Created some Movies!')

}