const db = require('../db')
const Actor = require('../models/actor')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    //finding the Parent data to get their _id to reference for our children
    const theHoldovers = await Movie.find({title: 'The Holdovers'})
    const americanFiction = await Movie.find({title: 'American Fiction'})
    const theZoneOfInterest = await Movie.find({title: 'The Zone of Interest'})
    const barbie = await Movie.find({title: 'Barbie'})
    const oppenheimer = await Movie.find({title: 'Oppenheimer'})
    const poorThings = await Movie.find({title: 'Poor Things'})
    const pastLives = await Movie.find({title: 'Past Lives'})
    const anatomyOfAFall = await Movie.find({title: 'Anatomy of a Fall'})
    const maestro = await Movie.find({title: 'Maestro'})
    const killers = await Movie.find({title: 'Killers of the Flower Moon'})


    const actors = [
        {
            name : "Paul Giamatti",
            age : 56,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BOTc0MDAzMTU4N15BMl5BanBnXkFtZTcwNzA0NzcwNA@@._V1_FMjpg_UX1000_.jpg",
            movie : theHoldovers[0]._id
        },
        {
            name : "Dominic Sessa",
            age : 21,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BODFiNjdjZWQtNzkyNi00ODNiLTlkOGItNmZmNzg1NjI4MmQzXkEyXkFqcGdeQXVyMTU3MDYwNjU5._V1_.jpg",
            movie : theHoldovers[0]._id
        },
        {
            name : "Jeffery Wright",
            age : 58,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMjI1NDYyNzk4OV5BMl5BanBnXkFtZTgwNDAyMzI1MDI@._V1_.jpg",
            movie : americanFiction[0]._id
        },
        {
            name : "Tracee Ellis Ross",
            age : 51,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BYjgyNmQyNTgtMWUyOC00YmQ1LThjYjMtZjU5OWJiYTViZGVhXkEyXkFqcGdeQXVyMTU5MzgzMzM5._V1_.jpg",
            movie : americanFiction[0]._id
        },
        {
            name : "Christian Friedel",
            age : 44,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BOGQ3ZGY3NWEtNTE5Ny00ZmUxLWFkM2YtMzFkNmRlYWJhMTFlXkEyXkFqcGdeQXVyMzkzMzAxNQ@@._V1_.jpg",
            movie : theZoneOfInterest[0]._id
        },
        {
            name : "Sandra Hüller",
            age : 45,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BN2NmMzVhOTktNjc3Yy00YWJlLWFmYmQtMTgyYzIxZDBmNTk0XkEyXkFqcGdeQXVyMTExNzQ3MzAw._V1_.jpg",
            movie : (theZoneOfInterest[0]._id, anatomyOfAFall[0]._id)
        },
        {
            name : "Margot Robbie",
            age : 33,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMTgxNDcwMzU2Nl5BMl5BanBnXkFtZTcwNDc4NzkzOQ@@._V1_.jpg",
            movie : barbie[0]._id
        },
        {
            name : "Ryan Gosling",
            age : 43,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
            movie : barbie[0]._id
        },
        {
            name : "Cillian Murphy",
            age : 47,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMDUxY2M1NTQtNzcwNC00ZDljLTk4YjctYzJjZGNiYTc0YTE1XkEyXkFqcGdeQXVyMTY5MDA5MDc3._V1_.jpg",
            movie : oppenheimer[0]._id
        },
        {
            name : "Emily Blunt",
            age : 40,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_.jpg",
            movie : oppenheimer[0]._id
        },
        {
            name : "Emma Stone",
            age : 35,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_.jpg",
            movie : poorThings[0]._id
        },
        {
            name : "Mark Ruffalo",
            age : 56,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BNWIzZTI1ODUtZTUzMC00NTdiLWFlOTYtZTg4MGZkYmU4YzNlXkEyXkFqcGdeQXVyNTExOTk5Nzg@._V1_.jpg",
            movie : poorThings[0]._id
        },
        {
            name : "Greta Lee",
            age : 40,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMThlN2ZjZDAtODY4OS00MDQ4LWJmNDgtY2U4M2NiNDk3ODljXkEyXkFqcGdeQXVyMTU2MDcyMjMw._V1_.jpg",
            movie : pastLives[0]._id
        },
        {
            name : "Teo Yoo",
            age : 42,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMmFhZTc4MjUtNjA3OC00OThkLWFjZWMtMjI4ZjFhNDI3M2I3XkEyXkFqcGdeQXVyNDU4MTA3ODc@._V1_.jpg",
            movie : pastLives[0]._id
        },
        {
            name : "Swann Arlaud",
            age : 42,
            alive : true,
            image: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/23201/SwannArlaud-2019.jpg",
            movie : anatomyOfAFall[0]._id
        },
        {
            name : "Bradley Cooper",
            age : 49,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMjM0OTIyMzY1M15BMl5BanBnXkFtZTgwMTg0OTE0NzE@._V1_.jpg",
            movie : maestro[0]._id
        },
        {
            name : "Carey Mulligan",
            age : 38,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BNjQ1NGM2ODUtODc3Ny00ZjdhLTljNzEtMmY2M2M2MDY2Y2IzXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
            movie : maestro[0]._id
        },
        {
            name : "Leonardo DiCaprio",
            age : 49,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX1000_.jpg",
            movie : killers[0]._id
        },
        {
            name : "Lily Gladstone",
            age : 37,
            alive : true,
            image: "https://m.media-amazon.com/images/M/MV5BMTUzNDQ0MzY4OF5BMl5BanBnXkFtZTgwMjAwMTMzOTE@._V1_.jpg",
            movie : killers[0]._id
        },

    ]
    await Actor.insertMany(actors)
    console.log('Created actors with movies!')
}

const run = async () => {
    await main()
    db.close()
}

run()