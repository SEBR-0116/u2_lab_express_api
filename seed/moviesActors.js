const db = require('../db')
const {Movie, Actor} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// code for many to many relationship adapted from: https://www.bezkoder.com/mongodb-many-to-many-mongoose/

const main = async() => {
    const createMovie = (movie) => {
        return Movie.create(movie)
    }

    const createActor = (actor) => {
        return Actor.create(actor)
    }

    const addMovieToActor = (actorId, movie) => {
        return Actor.findByIdAndUpdate(
            actorId,
            {$push: {movies: movie._id}},
            {new: true, useFindAndModify: false}
        )
    }

    const addActorToMovie = (movieId, actor) => {
        return Movie.findByIdAndUpdate(
            movieId,
            {$push: {actors: actor._id}},
            {new: true, useFindAndModify: false}
        )
    }

    const banshees = await createMovie ({
        title: 'The Banshees of Inisherin',
        runtime: 114,
        year: 2022,
        rating: 'R',
        description: 'Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.',
        oscars: {
            nominations: ['Best Picture', 'Best Director', 'Best Actor', 'Best Supporting Actor', 'Best Supporting Actress', 'Best Original Screenplay', 'Best Film Editing', 'Best Original Score']
        }
    })
    const coldMountain = await createMovie ({
        title: 'Cold Mountain',
        runtime: 154,
        year: 2003,
        rating: 'R',
        description: 'In the waning days of the American Civil War, a wounded soldier embarks on a perilous journey back home to Cold Mountain, North Carolina to reunite with his sweetheart.',
        oscars: {
            nominations: ['Best Actor', 'Best Cinematography', 'Best Film Editing', 'Best Original Score', 'Best Original Song'],
            wins: ['Best Supporting Actress']
        }
    })

    const compass = await createMovie ({
        title: 'The Golden Compass',
        runtime: 113,
        year: 2007,
        rating: 'PG-13',
        description: 'In a parallel universe, young Lyra Belacqua journeys to the far North to save her best friend and other kidnapped children from terrible experiments by a mysterious organisation.',
        oscars: {
            nominations: ['Best Art Direction'],
            wins: ['Best Visual Effects']
        }
    })

    const croft = await createMovie ({
        title: 'Lara Croft: Tomb Raider',
        runtime: 100,
        year: 2001,
        rating: 'PG-13',
        description: 'Video game adventurer Lara Croft comes to life in a movie where she races against time and villains to recover powerful ancient artifacts.',
    })

    const alexander = await createMovie ({
        title: 'Alexander',
        runtime: 175,
        year: 2004,
        rating: 'R',
        description: 'Alexander, the King of Macedonia and one of the greatest army leaders in the history warfare, conquers much of the known world.'
    })

    const dunkirk = await createMovie ({
        title: 'Dunkirk',
        runtime: 106,
        year: 2017,
        rating: 'PG-13',
        description: 'Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.',
        oscars: {
            nominations: ['Best Picture', 'Best Director', 'Best Cinematography', 'Best Original Score', 'Best Production Design'],
            wins: ['Best Film Editing', 'Best Sound Editing', 'Best Sound Mixing']
        }
    })

    const knight = await createMovie ({
        title: 'The Dark Knight Rises',
        runtime: 165,
        year: 2012,
        rating: 'PG-13',
        description: 'Eight years after the Joker\'s reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.',
    })

    const inception = await createMovie ({
        title: 'Inception',
        runtime: 148,
        year: 2010,
        rating: 'PG-13',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
        oscars: {
            nominations: ['Best Picture', 'Best Original Screenplay', 'Best Art Direction', 'Best Original Score'],
            wins: ['Best Cinematography', 'Best Sound Editing', 'Best Sound Mixing', 'Best Visual Effects']
        }
    })

    const condon = await createActor ({
        name: 'Kerry Condon',
        birthday: new Date(1983, 1, 9),
        active: true,
        oscars: {
            nominations: [{
                category: 'Best Supporting Actress',
                year: 2023,
                work: 'The Banshees of Inisherin'
            }]
        }
    })

    const farrell = await createActor({
        name: 'Colin Farrell',
        birthday: new Date(1976, 5, 31),
        active: true,
        oscars: {
            nominations: [{
                category: 'Best Actor',
                year: 2023,
                work: 'The Banshees of Inisherin'
            }]
        }
    })

    const gleeson = await createActor({
        name: 'Brendan Gleeson',
        birthday: new Date(1955, 3, 29),
        active: true,
        oscars: {
            nominations: [{
                category: 'Best Supporting Actor',
                year: 2023,
                work: 'The Banshees of Inisherin'
            }]
        }
    })

    const keoghan = await createActor({
        name: 'Barry Keoghan',
        birthday: new Date(1992, 10, 17),
        active: true,
        oscars: {
            nominations: [{
                category: 'Best Supporting Actor',
                year: 2023,
                work: 'The Banshees of Inisherin'
            }]
        }
    })

    const kidman = await createActor({
        name: 'Nicole Kidman',
        birthday: new Date(1967, 6, 20),
        active: true,
        oscars: {
            nominations: [{
                category: 'Best Actress',
                year: 2002,
                work: 'Moulin Rouge!'
            },
            {
                category: 'Best Actress',
                year: 2011,
                work: 'Rabbit Hole'
            },
            {
                category: 'Best Supporting Actress',
                year: 2017,
                work: 'Lion'
            },
            {
                category: 'Best Actress',
                year: 2022,
                work: 'Being the Ricardos'
            }],
            wins: [{
                category: 'Best Actress',
                year: 2003,
                work: 'The Hours'
            }]
        }
    })

    const craig = await createActor({
        name: 'Daniel Craig',
        birthday: new Date(1968, 3, 2),
        active: true
    })

    const jolie = await createActor({
        name: 'Angelina Jolie',
        birthday: new Date(1975, 6, 4),
        active: true,
        oscars: {
            nominations: [{
                category: 'Best Actress',
                year: 2009,
                work: 'Changeling'
            }],
            wins: [{
                category: 'Best Supporting Actress',
                year: 2000,
                work: 'Girl, Interrupted'
            }]
        }
    })

    const hardy = await createActor({
        name: 'Tom Hardy',
        birthday: new Date(1977, 9, 15),
        active: true
    })

    const murphy = await createActor ({
        name: 'Cillian Murphy',
        birthday: new Date(1976, 5, 25),
        active: true
    })

    const jgl = await createActor ({
        name: 'Joseph Gordon-Levitt',
        birthday: new Date (1981, 2, 17),
        active: true
    })

    let movie = await addActorToMovie(banshees._id, condon)

    movie = await addActorToMovie(banshees._id, farrell)

    movie = await addActorToMovie(banshees._id, gleeson)

    movie = await addActorToMovie(banshees._id, keoghan)

    movie = await addActorToMovie(coldMountain._id, gleeson)

    movie = await addActorToMovie(coldMountain._id, kidman)

    movie = await addActorToMovie(coldMountain._id, murphy)

    movie = await addActorToMovie(compass._id, kidman)

    movie = await addActorToMovie(compass._id, craig)

    movie = await addActorToMovie(croft._id, craig)

    movie = await addActorToMovie(croft._id, jolie)

    movie = await addActorToMovie(alexander._id, jolie)

    movie = await addActorToMovie(alexander._id, farrell)

    movie = await addActorToMovie(dunkirk._id, keoghan)

    movie = await addActorToMovie(dunkirk._id, hardy)

    movie = await addActorToMovie(dunkirk._id, murphy)

    movie = await addActorToMovie(knight._id, hardy)

    movie = await addActorToMovie(knight._id, murphy)

    movie = await addActorToMovie(knight._id, jgl)

    movie = await addActorToMovie(inception._id, hardy)

    movie = await addActorToMovie(inception._id, murphy)

    movie = await addActorToMovie(inception._id, jgl)

    let actor = await addMovieToActor(condon._id, banshees)

    actor = await addMovieToActor(farrell._id, banshees)

    actor = await addMovieToActor(farrell._id, alexander)

    actor = await addMovieToActor(gleeson._id, banshees)

    actor = await addMovieToActor(gleeson._id, coldMountain)

    actor = await addMovieToActor(keoghan._id, banshees)

    actor = await addMovieToActor(keoghan._id, dunkirk)

    actor = await addMovieToActor(kidman._id, coldMountain)

    actor = await addMovieToActor(kidman._id, compass)

    actor = await addMovieToActor(craig._id, compass)

    actor = await addMovieToActor(craig._id, croft)

    actor = await addMovieToActor(jolie._id, croft)

    actor = await addMovieToActor(jolie._id, alexander)

    actor = await addMovieToActor(hardy._id, dunkirk)

    actor = await addMovieToActor(hardy._id, knight)

    actor = await addMovieToActor(hardy._id, inception)

    actor = await addMovieToActor(murphy._id, coldMountain)

    actor = await addMovieToActor(murphy._id, dunkirk)

    actor = await addMovieToActor(murphy._id, knight)

    actor = await addMovieToActor(murphy._id, inception)

    actor = await addMovieToActor(jgl._id, inception)

    actor = await addMovieToActor(jgl._id, knight)

}

const run = async() => {
    await main()
    db.close()
}

run()