const db = require('../db')
const { Movie, Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const movie_1 = await new Movie ({

                title: "kaaka Kaaka",
                director: "GVM",
                runtime: 2.35,
                rating: 5,
                year_release: "2005-02-09",
                description: "Action",
                gener: "Action",
                image: ""
        })
        movie_1.save()

    const movie_2 = await new Movie ({
            title: "LEO",
            director: "Logesh",
            runtime: 2.65,
            rating: 5,
            year_release: "2024-02-09",
            description: "Action",
            gener: "Action",
            image: ""        
    })
    movie_2.save()

    const movie_3 = await new Movie ({
        
        title: "VTV",
        director: "GVM",
        runtime: 2.15,
        rating: 5,
        year_release: "2008-02-09",
        description: "Action",
        gener: "Action",
        image: "" 
    })
    movie_3.save()

    const movie_4 = await new Movie ({
        
        title: "Vikram",
        director: "Logash",
        runtime: 3.15,
        rating: 5,
        year_release: "2023-06-11",
        description: "Action",
        gener: "Action",
        image: "" 
    })
    movie_4.save()

    const movie_5 = await new Movie ({
        
        title: "Jailer",
        director: "Nelson",
        runtime: 2.55,
        rating: 4,
        year_release: "2023-09-19",
        description: "Action",
        gener: "Action",
        image: "" 
    })
    movie_5.save()

  const actors = [
    
    {
        name: "Suriya",
        dob: "1985-02-09",
        gender: "Male",
        rank:2,
        hit_blockbuster:9,
        image: "",
        nationality: "Indian",
        is_active: true,
        movie_id:movie_1.id
      },
        {
            name: "Vijay",
            dob: "1980-09-15",
            gender: "Male",
            rank:1,
            hit_blockbuster:11,
            image: "",
            nationality: "Indian",
            is_active: true,
            movie_id: movie_2.id
        },
        {
            name: "Simbu",
            dob: "1970-08-12",
            gender: "Male",
            rank:4,
            hit_blockbuster:6,
            image: "",
            nationality: "indian",
            is_active: true,
            movie_id: movie_3.id
        },
        {
            name: "Kamal",
            dob: "1955-05-12",
            gender: "Male",
            rank:4,
            hit_blockbuster:20,
            image: "",
            nationality: "indian",
            is_active: true,
            movie_id: movie_4.id
        },
        {
            name: "Rajini",
            dob: "1950-12-12",
            gender: "Male",
            rank:6,
            hit_blockbuster:19,
            image: "",
            nationality: "indian",
            is_active: true,
            movie_id: movie_5.id
        },
        {
            name: "Jothika",
            dob: "1990-09-15",
            gender: "Female",
            rank:2,
            hit_blockbuster:9,
            image: "",
            nationality: "Indian",
            is_active: true,
            movie_id: movie_1.id
        },
        {
            name: "Niyan",
            dob: "1995-08-12",
            gender: "Female",
            rank:2,
            hit_blockbuster:9,
            image: "",
            nationality: "indian",
            is_active: true,
            movie_id: movie_3.id
        },
        {
            name: "Aushka",
            dob: "1995-05-12",
            gender: "Female",
            rank:5,
            hit_blockbuster:9,
            image: "",
            nationality: "indian",
            is_active: true,
            movie_id: movie_4.id
        },
        {
            name: "Priyanka",
            dob: "1990-12-12",
            gender: "Female",
            rank:6,
            hit_blockbuster:9,
            image: "",
            nationality: "indian",
            is_active: true,
            movie_id: movie_5.id
        },
        {
            name: "Banu",
            dob: "1980-12-12",
            gender: "Female",
            rank:2,
            hit_blockbuster:9,
            image: "",
            nationality: "indian",
            is_active: true,
            movie_id: movie_4.id
        }
  ]

  await Actor.insertMany(actors)
  console.log('Created Movies and Actors!')
}

const run = async () => {
  await main()
  db.close()
}

run()