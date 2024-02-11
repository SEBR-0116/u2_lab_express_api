const db = require('../db')
const Movies = require('../models/movies')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const movies = [
    {
    title: 'Black Clover: Sword of the Wizard King',
    duration: '1h 50m',
    year_released: 2023,
    rating: 7.4,
    description: `In a world where magic is everything, Asta, a boy who was born with no magic, aims to become the "Wizard King" to overcome adversity, prove his power, and keep his oath with his friends.`
    },
    {
      title: 'Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train',
      duration: '1h 57m',
      year_released: 2020,
      rating: 8.2,
      description: `After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.`
    },
    {
      title: 'Interstellar',
      duration: '2h 49m',
      year_released: 2014,
      rating: 8.7,
      description: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`
    },
    {
      title: 'The Martian',
      duration: '2h 24m',
      year_released: 2015,
      rating: 8.0,
      description: `An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive and can survive until a potential rescue.`
    },
    {
      title: 'Now You See Me',
      duration: '1h 55m',
      year_released: 2013,
      rating: 7.2,
      description: `An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.`
    },
  ]

  await Movies.insertMany(movies)
  console.log('Created movies')
  
}

const run = async () => {
  await main()
    db.close()
}

run()