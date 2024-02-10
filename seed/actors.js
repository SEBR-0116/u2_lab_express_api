const db=require("../db");
const Actor=require("../models/actor")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main= async () =>{
    const actors=[
        {
            name: 'Christian Bale',
            birthday: 'January 30, 1974',
            alive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg',
            movie: ['65c71816e7162c6c52bb4186']
        },
        {
            name: 'Morgan Freeman',
            birthday: 'June 1, 1937',
            alive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_FMjpg_UX1000_.jpg',
            movie: ['65c71816e7162c6c52bb4186', '65c71816e7162c6c52bb4187']
        },
        {
            name: 'Jason Statham',
            birthday: 'July 26, 1967',
            alive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BMTkxMzk2MDkwOV5BMl5BanBnXkFtZTcwMDAxODQwMg@@._V1_.jpg',
            movie: ['65c71816e7162c6c52bb4188']
        },
        {
            name: 'Miles Teller',
            birthday: 'February 20, 1987',
            alive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BM2ZiYThiZTUtYmM0ZS00ZWQzLTgzMTEtZWY1ZDkwNWM4ZGNmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_FMjpg_UX1000_.jpg',
            movie: ['65c71816e7162c6c52bb4189']
        },
        {
            name: 'Tommy Lee Jones',
            birthday: 'September 15, 1946',
            alive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BMTkyNjc4MDc0OV5BMl5BanBnXkFtZTcwOTc5OTUwOQ@@._V1_FMjpg_UX1000_.jpg',
            movie: ['65c71816e7162c6c52bb418a']
        },
        {
            name: 'Ryunosuke Kamiki',
            birthday: 'May 19, 1993',
            alive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BNzlkYzdjYWEtOTkyNC00NDNhLWIyNTItZmFjNWQxZDZmNzFlXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1000_.jpg',
            movie: ['65c71816e7162c6c52bb418b']
        },
        {
            name: 'Christian Friedel',
            birthday: 'March 9, 1979',
            alive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BOGQ3ZGY3NWEtNTE5Ny00ZmUxLWFkM2YtMzFkNmRlYWJhMTFlXkEyXkFqcGdeQXVyMzkzMzAxNQ@@._V1_FMjpg_UX1000_.jpg',
            movie: ['65c71816e7162c6c52bb418c']
        },
        {
            name: 'Emily Blunt',
            birthday: 'February 23, 1983',
            alive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_.jpg',
            movie: ['65c71816e7162c6c52bb418d']
        },
        {
            name: 'Emma Stone',
            birthday: 'November 6, 1988',
            alive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_.jpg',
            movie: ['65c71816e7162c6c52bb418e']
        },
        {
            name: 'Brad Pitt',
            birthday: 'December 18, 1963',
            alive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_FMjpg_UX1000_.jpg',
            movie: ['65c71816e7162c6c52bb418f']
        }



    ]
    await Actor.insertMany(actors)
    console.log('Created Actors!')
}

const run = async () => {
    await Actor.collection.drop(function(err){
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
