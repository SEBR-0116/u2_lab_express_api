const db = require('../db')
const Review = require('../models/review')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	const theDarkKnight = await Movie.find({ title: 'The Dark Knight' })
	const inception = await Movie.find({ title: 'Inception' })
	const johnWick = await Movie.find({ title: 'John Wick' })
	const fastAndFurious = await Movie.find({ title: 'Fast and Furious' })
	const ironMan = await Movie.find({ title: 'Iron Man' })

	const reviews = [
		{
			score: 5,
			comment:
				"If you don't like Iron Man, then you should stop going to movies.",
			movie_id: theDarkKnight[0]._id,
		},
		{
			score: 4,
			comment: 'A mind-bending experience.',
			movie_id: inception[0]._id,
		},
		{
			score: 4,
			comment:
				"John Wick is an absolute cinematic masterpiece that redefines the action genre. From the very first scene to the last, the film grabs you by the throat and doesn't let go, taking you on a thrilling roller-coaster ride of non-stop adrenaline-pumping action and raw emotion.",
			movie_id: johnWick[0]._id,
		},
		{
			score: 3,
			comment:
				"This movie franchise has been around since before I was born. I've seen every movie at least 5 times, and not one has disappointed me. I love the fact that they use a variety of different vehicles from different places around the world. One thing that kinda bothers me is the fact that since Brian(Paul Walker, Rest In Peace) died, the movies seem as if the characters are more or less heroes than street racers. If universal studios could maybe town down on the heroic scenes and more street racing scenes, I would be beyond happy. But other than that, I highly recommend this series to car lovers!",
			movie_id: fastAndFurious[0]._id,
		},
		{
			score: 4,
			comment:
				"In my eyes Iron Man is what could be called a perfect hero's journey. We start off with a guy who has a TON of issues, then he goes into a cave, and not a metaphorical one, but a actual one, and comes out a hero. The classic hero's journey done with so much effortless fun. The great thing about this whole situation though is that the audience is rooting for Tony, thanks to all the charisma and fun that Robert Downey Jr brings to the role. In fact, every character in this movie has a lot of fun personality. Jeff Bridges Obadiah Stane is simultaneously terrifying and funny at the same time. Gwyneth Paltrow and Terrence Howard also bring some big personality to their roles of Pepper Potts and James Rhodes. The visual effects in this movie are also astounding at times, and this movie is now fifteen years old! I also love the action in this flick, its heavy but also has a spark of humor and a lot of creativity thrown into the mix. Overall, this is a great, easily top 10 MCU film that kicks off the most profitable and well loved franchises in the history of cinema.",
			movie_id: ironMan[0]._id,
		},
	]
	await Review.insertMany(reviews)
	console.log('Reviews have been created!')
}

const run = async () => {
	await main()
	db.close()
}

run()
