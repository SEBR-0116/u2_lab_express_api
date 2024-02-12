const db = require('../db')
const Movies = require ('../models/movies')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        { 
            title: "Aquaman",
            genre: ["Action" , "Adventure" , "Fantasy"],
            rating: "PG-13",
            run_time: "2h 23m",
            year_released: 2018,
            director: "James Wan",
            stars: ["Jason Momoa", "Amber Heard", "Willem Dafoe", "Patrick Wilson", "Nicole Kidman"],
            isInSeries: true,
            animated: false
        },
        { 
            title: "Wonka",
            genre: ["Comedy" , "Adventure" , "Family"],
            rating: "PG",
            run_time: "1h 56m",
            year_released: 2023,
            director: "Paul King",
            stars: ["Timothy Chalamet", "Gustave Die", "Murray McArthur", "Paul G. Raymond", "Bertie Caplan"],
            isInSeries: false,
            animated: false
        },
        { 
            title: "The Super Mario Bros. Movie",
            genre: ["Comedy" , "Adventure" , "Animation"],
            rating: "PG",
            run_time: "1h 32m",
            year_released: 2023,
            director: "Paron Horvath",
            stars: ["Chris Patt", "Anya Taylor-Joy", "Charlie Day", "Jack Black"],
            isInSeries: false,
            animated: true
        },
        { 
            title: "Indiana Jones and the Dial of Destiny",
            genre: ["Action" , "Adventure"],
            rating: "PG-13",
            run_time: "2h 34m",
            year_released: 2023,
            director: "James Mangold",
            stars: ["Harrison Ford", "Phoebe Waller-Bridge", "Antonio Banderas", "Karen Allen", "John Rhys-Davies"],
            isInSeries: true,
            animated: false
        },
        { 
            title: "The Flash",
            genre: ["Action" , "Adventure", "Fantasy"],
            rating: "PG-13",
            run_time: "2h 24m",
            year_released: 2023,
            director: "Andy Muschietti",
            stars: ["Ezra Miller", "Michael Keaton", "Sasha Calle", "Michael Shannon", "Ron Livingston"],
            isInSeries: false,
            animated: false
        }
    ]

    await Movies.insertMany(movies)
    console.log("Created movies")
}
const run = async () => {
    await main()
    db.close()
}

run()