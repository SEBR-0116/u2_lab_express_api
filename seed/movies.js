const db = require('../db')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	const movies = [
		{
			title: 'The Dark Knight',
			runTime: 152,
			rating: 9.6,
			yearReleased: 2008,
			description:
				'With the help of allies Lt. Jim Gordon and DA Harvey Dent , Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.',
			image:
				'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
		},
		{
			title: 'Inception',
			runTime: 148,
			rating: 9.7,
			yearReleased: 2010,
			description:
				'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
			image:
				'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
		},
		{
			title: 'John Wick',
			runTime: 101,
			rating: 9.3,
			yearReleased: 2014,
			description:
				'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
			image:
				'https://m.media-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69.jpg',
		},
		{
			title: 'Fast and Furious',
			runTime: 107,
			rating: 8.8,
			yearReleased: 2009,
			description:
				"Brian O'Conner, back working for the FBI in Los Angeles, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation.",
			image:
				'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Fast_and_Furious_Poster.jpg/220px-Fast_and_Furious_Poster.jpg',
		},
		{
			title: 'Iron Man',
			runTime: 126,
			rating: 9.4,
			yearReleased: 2008,
			description:
				'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
			image:
				'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg',
		},
	]
	await Movie.insertMany(movies)
	console.log('Movies have been created!')
}

const run = async () => {
	await main()
	db.close()
}

run()
