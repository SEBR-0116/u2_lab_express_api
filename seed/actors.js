const db = require('../db')
const Actors = require('../models/actors')
const Movies = require('../models/movies')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const blackClover = await Movies.find({title: 'Black Clover: Sword of the Wizard King'})
  const demonSlayer = await Movies.find({title: 'Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train'})
  const interstellar = await Movies.find({title: 'Interstellar'})
  const theMartian = await Movies.find({title: 'The Martian'})
  const nowYouSeeMe = await Movies.find({title: 'Now You See Me'})

  const actors = [
    {
      name: 'Dallas Reid',
      age: 30,
      as: 'Asta',
      alive: true,
      movie_id: blackClover[0]._id
    },
    {
      name: 'Jill Karris',
      age: 29,
      as: "Noelle",
      alive: true,
      movie_id: blackClover[0]._id
    },
    {
      name: 'Natsuki Hanae',
      age: 32,
      as: 'Tanjiro',
      alive: true,
      movie_id: demonSlayer[0]._id
    },
    {
      name: 'Hiro Shimono',
      age: 43,
      as: 'Zenitsu',
      alive: true,
      movie_id: demonSlayer[0]._id
    },
    {
      name: 'Matthew McConaughey',
      age: 54,
      as: 'Cooper',
      alive: true,
      movie_id: interstellar[0]._id
    },
    {
      name: 'Anne Hathaway',
      age: 41,
      as: 'Brand',
      alive: true,
      movie_id: interstellar[0]._id
    },
    {
      name: 'Matt Damon',
      age: 53,
      as: 'Mark Watney',
      alive: true,
      movie_id: theMartian[0]._id
    },
    {
      name: 'Donald Glover',
      age: 40,
      as: 'Rich Purnell',
      alive: true,
      movie_id: theMartian[0]._id
    },
    {
      name: 'Jesse Eisenberg',
      age: 40,
      as: `J. Daniel Atlas`,
      alive: true,
      movie_id: nowYouSeeMe[0]._id
    },
    {
      name: 'Mark Ruffalo',
      age: 56,
      as: 'Dylan Rhodes',
      alive: true,
      movie_id: nowYouSeeMe[0]._id
    }
  ]

  await Actors.insertMany(actors)
  console.log('Created actors')
  
}

const run = async () => {
  await main()
    db.close()
}

run()