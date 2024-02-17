const db = require('../db')
const Actor = require('../models/actor')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	const theDarkKnight = await Movie.find({ title: 'The Dark Knight' })
	const inception = await Movie.find({ title: 'Inception' })
	const johnWick = await Movie.find({ title: 'John Wick' })
	const fastAndFurious = await Movie.find({ title: 'Fast and Furious' })
	const ironMan = await Movie.find({ title: 'Iron Man' })

	const actors = [
		{
			name: 'Christian Bale',
			age: 47,
			alive: true,
			hometown: 'Wales',
			movie_id: theDarkKnight[0]._id,
		},
		{
			name: 'Heath Ledger',
			age: 28,
			alive: false,
			hometown: 'Perth',
			movie_id: theDarkKnight[0]._id,
		},
		{
			name: 'Leonardo DiCaprio',
			age: 47,
			alive: true,
			hometown: 'Los Angeles',
			movie_id: inception[0]._id,
		},
		{
			name: 'Joseph Gordon-Levitt',
			age: 41,
			alive: true,
			hometown: 'Los Angeles',
			movie_id: inception[0]._id,
		},
		{
			name: 'Keanu Reeves',
			age: 57,
			alive: true,
			hometown: 'Beirut',
			movie_id: johnWick[0]._id,
		},
		{
			name: 'Ian McShane',
			age: 79,
			alive: true,
			hometown: 'Blackburn',
			movie_id: johnWick[0]._id,
		},
		{
			name: 'Vin Diesel',
			age: 54,
			alive: true,
			hometown: 'Alameda County',
			movie_id: fastAndFurious[0]._id,
		},
		{
			name: 'Paul Walker',
			age: 40,
			alive: false,
			hometown: 'Glendale',
			movie_id: fastAndFurious[0]._id,
		},
		{
			name: 'Robert Downey Jr.',
			age: 57,
			alive: true,
			hometown: 'Manhattan',
			movie_id: ironMan[0]._id,
		},
		{
			name: 'Gwyneth Paltrow',
			age: 49,
			alive: true,
			hometown: 'Los Angeles',
			movie_id: ironMan[0]._id,
		},
	]
	await Actor.insertMany(actors)
	console.log('Actors have been created!')
}

const run = async () => {
	await main()
	db.close()
}

run()
