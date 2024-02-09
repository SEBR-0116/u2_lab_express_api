const db=require("../db");
const Movie=require("../models/movie")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main= async () =>{
    await db.dropDatabase()
    console.log('Database dropped succesfully')
    const movies=[
        {
            title: 'The Dark Knight',
            releaseYear: 2008,
            runTime: '2h 32m',
            rating:'PG-13',
            reviews:['65c6a0847799433e778cb863', '65c6a0847799433e778cb864' ]
        },
        {
            title: 'The Shawshank Redemption',
            releaseYear: 1994,
            runTime: '2h 22m',
            rating:'R',
            reviews:['65c6a0847799433e778cb865', '65c6a0847799433e778cb866']
        },
        {
            title: 'The Beekeeper',
            releaseYear: 2024,
            runTime: '1h 45m',
            rating:'R',
            reviews:['65c6a0847799433e778cb867', '65c6a0847799433e778cb868']
        },
        {
            title: 'Whiplash',
            releaseYear: 2014,
            runTime: '1h 46m',
            rating:'R',
            reviews:['65c6a0847799433e778cb869']
        },
        {
            title: 'No Country For Old Men',
            releaseYear: 2007,
            runTime: '2h 2m',
            rating:'R',
            reviews:['65c6a0847799433e778cb86a']
        },
        {
            title: 'Godzilla: Minus One',
            releaseYear: 2023,
            runTime: '2h 4m',
            rating:'PG-13',
            reviews:['65c6a0847799433e778cb86b']
        },
        {
            title: 'Zone of Interest',
            releaseYear: 2023,
            runTime: '1h 45m',
            rating:'PG-13',
            reviews:['65c6a0847799433e778cb86c']
        },
        {
            title: 'Sicario',
            releaseYear: 2015,
            runTime: '2h 1m',
            rating:'R',
            reviews:['65c6a0847799433e778cb86d']
        },
        {
            title: 'Poor Things',
            releaseYear: 2023,
            runTime: '2h 21m',
            rating:'R',
            reviews:['65c6a0847799433e778cb86e']
        },
        {
            title: 'Fury',
            releaseYear: 2014,
            runTime: '2h 14m',
            rating:'R',
            reviews:['65c6a0847799433e778cb86f']
        }

    ]

    await Movie.insertMany(movies)
    console.log('Created Movies!')
}

const run = async () => {
    await main();
    db.close();
  };

  run();
