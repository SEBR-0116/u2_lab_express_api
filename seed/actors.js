const db = require('../db')
const { Actor, Movie } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actors = [
            {
                name: "Denzel Washington",
                birthday: "December 28, 1954",
                deceased: false
              },
              {
                name: "Julia Roberts",
                birthday: "October 28, 1967",
                deceased: false
              },
              {
                name: "John Travolta",
                birthday: "February 18, 1954",
                deceased: false
              },
              {
                name: "Angela Bassett",
                birthday: "August 16, 1958",
                deceased: false
              },
              {
                name: "Tom Cruise",
                birthday: "July 3, 1962",
                deceased: false
              }
    ]

    await Actor.insertMany(actors)
    console.log('Created actors!')
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







