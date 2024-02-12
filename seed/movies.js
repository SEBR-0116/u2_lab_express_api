const db=require("../db");
const Movie=require("../models/movie")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main= async () =>{
    const movies=[
        {
            title: 'The Dark Knight',
            releaseYear: 2008,
            runTime: '2h 32m',
            rating:'PG-13',
            reviews:['65c71706fb411df903f9d0cc', '65c71706fb411df903f9d0cd' ]
        },
        {
            title: 'The Shawshank Redemption',
            releaseYear: 1994,
            runTime: '2h 22m',
            rating:'R',
            reviews:['65c71706fb411df903f9d0ce', '65c71706fb411df903f9d0cf']
        },
        {
            title: 'The Beekeeper',
            releaseYear: 2024,
            runTime: '1h 45m',
            rating:'R',
            reviews:['65c71706fb411df903f9d0d0', '65c71706fb411df903f9d0d1']
        },
        {
            title: 'Whiplash',
            releaseYear: 2014,
            runTime: '1h 46m',
            rating:'R',
            reviews:['65c71706fb411df903f9d0d2']
        },
        {
            title: 'No Country For Old Men',
            releaseYear: 2007,
            runTime: '2h 2m',
            rating:'R',
            reviews:['65c71706fb411df903f9d0d3']
        },
        {
            title: 'Godzilla: Minus One',
            releaseYear: 2023,
            runTime: '2h 4m',
            rating:'PG-13',
            reviews:['65c71706fb411df903f9d0d4']
        },
        {
            title: 'Zone of Interest',
            releaseYear: 2023,
            runTime: '1h 45m',
            rating:'PG-13',
            reviews:['65c71706fb411df903f9d0d5']
        },
        {
            title: 'Sicario',
            releaseYear: 2015,
            runTime: '2h 1m',
            rating:'R',
            reviews:['65c71706fb411df903f9d0d6']
        },
        {
            title: 'Poor Things',
            releaseYear: 2023,
            runTime: '2h 21m',
            rating:'R',
            reviews:['65c71706fb411df903f9d0d7']
        },
        {
            title: 'Fury',
            releaseYear: 2014,
            runTime: '2h 14m',
            rating:'R',
            reviews:['65c71706fb411df903f9d0d8']
        }

    ]

    await Movie.insertMany(movies)
    console.log('Created Movies!')
}

const run = async () => {
    await Movie.collection.drop(function(err){
        if (err) {
            console.log('Error dropping collection: ', err);
        } else {
            console.log('Collection dropped successfully');
        }
    })
    await main();
    db.close();
  };

  run();
