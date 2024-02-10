const db = require('../db')
const { Actor, Movie } = require('../models');

db.on('error', console.error.bind (console, 'MondoDB connection error:'))

const main = async () => {
    const movies = [
        {
      title: "Training Day",
      runtimeMins: 122,
      rating: "R",
      released: "2001",
      description: "A gripping crime thriller starring Denzel Washington.",
      mainActor: '65c6f94835b178b652222689',
      imageURL: "https://m.media-amazon.com/images/M/MV5BMDZkMTUxYWEtMDY5NS00ZTA5LTg3MTItNTlkZWE1YWRjYjMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
      },
      {
      title: "Malcolm X",
      runtimeMins: 202,
      rating: "R",
      released: "1992",
      description: "A biographical drama depicting the life of Malcolm X, starring Denzel Washington.",
      mainActor: '65c6f94835b178b652222689',
      imageURL: "https://www.google.com/search?q=malcolm+x+movie+image&tbm=isch&ved=2ahUKEwiN5PeJ65-EAxWiD2IAHWR6B1QQ2-cCegQIABAA&oq=malcolm+x+movie+image&gs_lp=EgNpbWciFW1hbGNvbG0geCBtb3ZpZSBpbWFnZTIFEAAYgARIhlFQ8BJY_k5wAHgAkAEAmAFPoAGuDaoBAjI0uAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgYQABgIGB7CAggQABgIGAcYHsICBhAAGAcYHsICCBAAGAcYHhgKwgIKEAAYgAQYigUYQ8ICCBAAGAUYBxgeiAYB&sclient=img&ei=Re7GZc2tJqKfiLMP5PSdoAU&bih=371&biw=872&hl=en#imgrc=xoD_oA8h7ETbRM"
      },
      {
      title: "Pretty Woman",
      runtimeMins: 119,
      rating: "R",
      released: "1990",
      description: "A romantic comedy starring Julia Roberts and Richard Gere.",
      mainActor: '65c6f94835b178b65222268a',
      imageURL: "https://m.media-amazon.com/images/M/MV5BYjI5N2E2OTQtNDBjOS00MzZjLTkxNmMtNTBhOGI1NTZiYWZiXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"
      },
      {
      title: "Erin Brockovich",
      runtimeMins: 131,
      rating: "R",
      released: "2000",
      description: "A legal drama based on the true story of Erin Brockovich, starring Julia Roberts.",
      mainActor: '65c6f94835b178b65222268a',
      imageURL: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24917_p_v13_ai.jpg"
      },
      {
      title: "Pulp Fiction",
      runtimeMins: 154,
      rating: "R",
      released: "1994",
      description: "A Quentin Tarantino classic featuring John Travolta in a memorable role.",
      mainActor: '65c6f94835b178b65222268b',
      imageURL: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
      },
      {
      title: "Grease",
      runtimeMins: 110,
      rating: "R",
      released: "1978",
      description: "A musical film where John Travolta starred as Danny Zuko.",
      mainActor: '65c6f94835b178b65222268b',
      imageURL: "https://m.media-amazon.com/images/M/MV5BZmUyMDEyOTgtZmUwOS00NTdkLThlNzctNTM1ODQ4M2VhMjdhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
      },
      {
      title: "What's Love Got to Do with It",
      runtimeMins: 118,
      rating: "R",
      released: "1993",
      description: "A biographical film about Tina Turner, with Angela Bassett in the lead role.",
      mainActor: '65c6f94835b178b65222268c',
      imageURL: "https://m.media-amazon.com/images/M/MV5BYmQ1Yjk3N2UtODMwMy00MDVhLTkzNDctM2ZkODZmYzdhNjk3XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_.jpg"
      },
      {
      title: "Black Panther",
      runtimeMins: 134,
      rating: "R",
      released: "2018",
      description: "A Marvel superhero film featuring Angela Bassett as Ramonda.",
      mainActor: '65c6f94835b178b65222268c',
      imageURL: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg"
      },
      {
      title: "Top Gun",
      runtimeMins: 110,
      rating: "R",
      released: "1986",
      description: "An action drama film where Tom Cruise played the role of Pete 'Maverick' Mitchell.",
      mainActor: '65c6f94835b178b65222268d',
      imageURL: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
      },
      {
      title: "Mission: Impossible",
      runtimeMins: 110,
      rating: "R",
      released: "1996",
      description: "The first installment in the Mission: Impossible film series, starring Tom Cruise as Ethan Hunt.",
      mainActor: '65c6f94835b178b65222268d',
      imageURL: "https://m.media-amazon.com/images/M/MV5BOTFhMWY3ZTctNTJlOC00Y2UwLThmOGUtMWU4NDI1Yzg4ODRkXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg"
      }
      ]

    await Movie.insertMany(movies)
    console.log('Created movies!')
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


