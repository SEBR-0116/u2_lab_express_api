const db = require('../db')
const { Movie, Actor } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const actors = await Actor.find({}, {_id: 1, name: 1})
    console.log(actors[9].name)
    
    const moviesData = [
        {
            title: "Barbie",
            description: "A story about the iconic doll.",
            runtime_in_minutes: 90,
            date_released: new Date("2023-05-20"),
            cast: [
                actors[0]._id,
                actors[13]._id
            ],
            image: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
        },
        {
            title: "The Sound of Music",
            description: "A musical drama about a young Austrian woman studying to become a nun.",
            runtime_in_minutes: 174,
            date_released: new Date("1965-03-02"),
            cast: [
                /* ObjectId references to Julie Andrews, Christopher Plummer, and Eleanor Parker */
                // ObjectId('65c9171cc2cf7c89e1346b21'),
                // ObjectId('65c9171cc2cf7c89e1346b22'),
                // ObjectId('65c9171cc2cf7c89e1346b23')
                actors[1]._id,
                actors[2]._id,
                actors[3]._id
            ],
            image: "https://lumiere-a.akamaihd.net/v1/images/soundofmusic_2_d860d47a.jpeg?region=0%2C0%2C584%2C876"
        },
        {
            title: "Mary Poppins",
            description: "A magical nanny brings joy to a dysfunctional family in Edwardian London.",
            runtime_in_minutes: 139,
            date_released: new Date("1964-08-27"),
            cast: [
                /* ObjectId references to Julie Andrews, Dick Van Dyke, and another actor */
                // ObjectId('65c9171cc2cf7c89e1346b21'),
                // ObjectId('65c9171cc2cf7c89e1346b24')
                actors[1]._id,
                actors[4]._id
            ],
            image: "https://static.wikia.nocookie.net/disneyfanon/images/f/ff/Mary_Poppins_1964_poster.jpg/revision/latest?cb=20221129115516"
        },
        {
            title: "Inception",
            description: "A thief who enters the dreams of others to steal their secrets from their subconscious.",
            runtime_in_minutes: 148,
            date_released: new Date("2010-07-16"),
            cast: [
              /* Insert ObjectId references to actors in Inception */
            //   ObjectId('65c9171cc2cf7c89e1346b25'),
                actors[5]._id
            ],
            image: "https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg"
        },
        {
            title: "The Dark Knight",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            runtime_in_minutes: 152,
            date_released: new Date("2008-07-18"),
            cast: [
              /* Insert ObjectId references to actors in The Dark Knight */
            //   ObjectId('65c9171cc2cf7c89e1346b26'),
            //   ObjectId('65c919c3cf949a4c53725d4d')
                actors[6]._id,
                actors[14]._id
            ],
            image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
        },
        {
            title: "Pulp Fiction",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            runtime_in_minutes: 154,
            date_released: new Date("1994-10-14"),
            cast: [
              /* Insert ObjectId references to actors in Pulp Fiction */
            //   ObjectId('65c9171cc2cf7c89e1346b27')
                actors[7]._id
            ],
            image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15684_p_v10_ag.jpg"
        },
        {
            title: "Forrest Gump",
            description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            runtime_in_minutes: 142,
            date_released: new Date("1994-07-06"),
            cast: [
              /* Insert ObjectId references to actors in Forrest Gump */
            //   ObjectId('65c9171cc2cf7c89e1346b28')
                actors[8]._id
            ],
            image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg"
        },
        {
            title: "The Matrix",
            description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
            runtime_in_minutes: 136,
            date_released: new Date("1999-03-31"),
            cast: [
              /* Insert ObjectId references to actors in The Matrix */
            //   ObjectId('65c9171cc2cf7c89e1346b29')
                actors[9]._id
            ],
            image: "https://musicart.xboxlive.com/7/3caf5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "Fight Club",
            description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
            runtime_in_minutes: 139,
            date_released: new Date("1999-10-15"),
            cast: [
              /* Insert ObjectId references to actors in Fight Club */
                // ObjectId('65c9171cc2cf7c89e1346b2a')
                actors[10]._id
            ],
            image: "https://media.posterlounge.com/img/products/680000/676414/676414_poster.jpg"
        },
        {
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            runtime_in_minutes: 169,
            date_released: new Date("2014-11-07"),
            cast: [
              /* Insert ObjectId references to actors in Interstellar */
            //   ObjectId('65c9171cc2cf7c89e1346b2c'),
            //   ObjectId('65c919c3cf949a4c53725d4d')
                actors[12]._id,
                actors[14]._id
            ],
            image: "https://i.ebayimg.com/images/g/m88AAOSwtC1gr5ry/s-l400.jpg"
        },
    ];

    await Movie.insertMany(moviesData)
    console.log('Movie data has been successfully input to the Database')
}

const run = async () => {
    await main()
    db.close()
}

run()
