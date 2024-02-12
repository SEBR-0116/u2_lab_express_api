const db = require('../db')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const actorsData = [
        {
            name: "Ryan Gosling",
            date_of_birth: new Date("1980-11-12"),
            isAlive: true,
            image: "https://i.imgur.com/Ey2GhWH.jpg"
        },
        {
            name: "Julie Andrews",
            date_of_birth: new Date("1935-10-01"),
            isAlive: true,
            image: "https://goldenglobes.com/wp-content/uploads/2023/10/julie_andrews-gt.jpg?resize=755,1024"
        },
        {
            name: "Christopher Plummer",
            date_of_birth: new Date("1929-12-13"),
            isAlive: false,
            image: "https://i.guim.co.uk/img/media/58d4d2b5b487c2c629a3f9fd9293244ab9f4abcc/0_0_1803_2264/master/1803.jpg?width=380&dpr=1&s=none"
        },
        {
            name: "Eleanor Parker",
            date_of_birth: new Date("1922-06-26"),
            isAlive: false,
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRosarMVAJqqPZo96YkSlKa2DFYYBkEU9NZ__4Nb1IOIeVchbOB"
        },
        {
            name: "Dick Van Dyke",
            date_of_birth: new Date("1925-12-13"),
            isAlive: true,
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTokJUGTb6_qIl00HWKPanXwnY1KU-iqsK-J97uPPKQcjcyffTd"
        },
        {
            name: "Leonardo DiCaprio",
            date_of_birth: new Date("1974-11-11"),
            isAlive: true,
            image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/435_v9_bc.jpg"
        },
        {
            name: "Heath Ledger",
            date_of_birth: new Date("1979-04-04"),
            isAlive: false,
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT40rkAVBdU2mGPJZq8TImYpngBxFfg3BY8LQty0IQH3Gv9cfsY"
        },
        {
            name: "John Travolta",
            date_of_birth: new Date("1954-02-18"),
            isAlive: true,
            image: "https://m.media-amazon.com/images/S/pv-target-images/d9406124fcaa3540376b862b0516a78247e4f5706db164d302295d383052f3b1._SX300_.jpg"
        },
        {
            name: "Tom Hanks",
            date_of_birth: new Date("1956-07-09"),
            isAlive: true,
            image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSAH3LQht3_OypUB0nTtNJyUvK0Ioa0F5NdL5ICq_QLNe6D0-aCEFTrjuxecO3rPMXj0ZeXV2mHqjvshJo"
        },
        {
            name: "Keanu Reeves",
            date_of_birth: new Date("1964-09-02"),
            isAlive: true,
            image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1443_v9_bc.jpg"
        },
        {
            name: "Brad Pitt",
            date_of_birth: new Date("1963-12-18"),
            isAlive: true,
            image: "https://pyxis.nymag.com/v1/imgs/70a/8bf/035e2a45436f3c1ee8bb609b2beabfd93c-9-brad-pitt.rsquare.w400.jpg"
        },
        {
            name: "Edward Norton",
            date_of_birth: new Date("1969-08-18"),
            isAlive: true,
            image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/68012_v9_bc.jpg"
        },
        {
            name: "Matthew McConaughey",
            date_of_birth: new Date("1969-11-04"),
            isAlive: true,
            image: "https://livetalksla.org/wp-content/uploads/2023/07/MMc.jpg"
        },
        {
            name: "Natalie Portman",
            date_of_birth: new Date("1981-06-09"),
            isAlive: true,
            image: "https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
        },
    ];

    await Actor.insertMany(actorsData)
    console.log('Actors data has been inserted into the database')
} 

const run = async () => {
   await main()
   db.close()
}

run()