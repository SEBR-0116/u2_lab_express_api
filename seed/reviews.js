const db=require("../db");
const Review=require("../models/review")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main= async () =>{
    // await Review.collection.drop(function(err){
    //     if (err) {
    //         console.log('Error dropping collection: ', err);
    //     } else {
    //         console.log('Collection dropped successfully');
    //     }
    // })
    const reviews=[
        {
         movieName: 'Dark Knight',
         comment: 'The best movie I have ever seen. Great from start to finish',
         score: 5
        },
        {
            movieName: 'Dark Knight',
            comment: 'Not as good as the latest edition of the Batman reboot, but great nonetheless.',
            score: 4
        },
        {
            movieName: 'The Shawshank Redemption',
            comment: 'A sad tale that has a satisfying ending',
            score: 5
        },
        {
            movieName: 'The Shawshank Redemption',
            comment: 'At times a little too sad for me, but the ending makes up for the sadness.',
            score: 4
        },
        {
            movieName: 'The Beekeeper',
            comment: 'Arguably the worst movie I have ever seen, and that includes going in with low expectations',
            score: 1
        },
        {
            movieName: 'The Beekeeper',
            comment: 'A very low quality version of John Wick',
            score: 2
        },
        {
            movieName: 'Whiplash',
            comment: "Great movie. You don't have to understand music to realize how unique of a movie this is. One of the best",
            score: 4
        },
        {
            movieName: 'No Country For Old Men',
            comment: 'A movie with great acting, but unfortunately the purpose of the movie is too deep for the general public to understand',
            score: 3
        },
        {
            movieName: 'Godzilla: Minus One',
            comment: 'Movie of the year',
            score: 5
        },
        {
            movieName: 'Zone of Interest',
            comment: 'While the plot was boring, it had chilling elements and showed how people got used to what was happening in the concentration camps',
            score: 3
        },
        {
            movieName: 'Sicario',
            comment: 'Went in thinking it would be a heavy action movie, but left seeing how corrupt both countries politics are',
            score: 4
        },
        {
            movieName: 'Poor Things',
            comment: "I had no idea what to expect from this movie, but it wasn's that",
            score: 3
        },
        {
            movieName: 'Fury',
            comment: "An interesting perspective on battles involving tanks",
            score: 3.5
        }

    ]

    await Review.insertMany(reviews)
    console.log('Created Reviews!')
}

const run = async () => {
    await Review.collection.drop(function(err){
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
