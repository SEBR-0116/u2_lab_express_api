const db = require('../db')
const {  Movie, Review } = require('../models');

db.on('error', console.error.bind(console, 'MondoDB connection error:'))

const main = async () => {
    const reviews = [
        {
            comments: 'A gripping crime drama with powerful performances.',
            score: 8.92,
            movieId: '65c6ffd8a6cecbfbfb37ab2a'
        },
        {
            comments: 'Denzel Washington delivers an intense performance.',
            score: 9.15,
            movieId: '65c6ffd8a6cecbfbfb37ab2a'
        },
        {
            comments: "Ethan Hawke's portrayal adds depth to the storyline.",
            score: 7.96,
            movieId: '65c6ffd8a6cecbfbfb37ab2a3'
        },
        {
            comments: 'Captivating romantic story with excellent performances.',
            score: 9.21,
            movieId: '65c6ffd8a6cecbfbfb37ab2c'
        },
        {
            comments: 'Charming and heartwarming, a classic romantic comedy.',
            score: 7.88,
            movieId: '65c6ffd8a6cecbfbfb37ab2c'
        },
        {
            comments: 'Tom Cruise delivers breathtaking stunts in this action-packed thriller.',
            score: 8.76,
            movieId: '65c6ffd8a6cecbfbfb37ab33'
        },
        {
            comments: 'Suspenseful plot, jaw-dropping action sequences - a true blockbuster!',
            score: 9.32,
            movieId: '65c6ffd8a6cecbfbfb37ab33'
        }
    ]

    await Review.insertMany(reviews)
    console.log('Created reviews!')
}

const run = async () => {
  try {
      await main();
  } catch (error) {
      console.error('Error running the seed script:', error);
  } finally {
      db.close();
  }
}

run()