const db = require('../db')
const Movies = require('../models/movies')
const Actors = require('../models/actors')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Aquaman = await Movies.find ( {title: "Aquaman"} )
    const Wonka = await Movies.find ( {title: "Wonka"} )
    const Mario = await Movies.find ( {title: "The Super Mario Bros. Movie"} )
    const Indiana = await Movies.find ( {title: "Indiana Jones and the Dial of Destiny"} )
    const Flash = await Movies.find ( {title: "The Flash"} )


    const actor = [
        { 
            name:  "Jason Momoa",
            age: 45,
            featured_in: Aquaman[0]._id,
            image_path: "https://www.imdb.com/name/nm0597388/mediaviewer/rm3488789505/?ref_=nm_ov_ph",
            isAlive: true,
            ethinicity: "American"
        },
        { 
            name:  "Timothee Chalamet",
            age: 29,
            featured_in: Wonka[0]._id,
            image_path: "https://www.imdb.com/name/nm3154303/mediaviewer/rm4082101761/?ref_=nm_ov_ph",
            isAlive: true,
            ethinicity: "American"
        },
        { 
            name:  "Chris Patt",
            age: 45,
            featured_in: Mario[0]._id,
            image_path: "https://www.imdb.com/name/nm0695435/mediaviewer/rm2795241729/?ref_=nm_ov_ph",
            isAlive: true,
            ethinicity: "American"
        },
        { 
            name:  "Jack Black",
            age: 55,
            featured_in: Mario[0]._id,
            image_path: "https://www.imdb.com/name/nm0085312/mediaviewer/rm2590282497/?ref_=nm_ov_ph",
            isAlive: true,
            ethinicity: "American"
        },
        { 
            name:  "Harrison Ford",
            age: 82,
            featured_in: Indiana[0]._id,
            image_path: "https://www.imdb.com/name/nm0000148/mediaviewer/rm2178324224/?ref_=nm_ov_ph",
            isAlive: true,
            ethinicity: "American"
        },
        { 
            name:  "Ezra Miller",
            age: 32,
            featured_in: Flash[0]._id,
            image_path: "https://www.imdb.com/name/nm3009232/mediaviewer/rm3102589441/?ref_=nm_ov_ph",
            isAlive: true,
            ethinicity: "American"
        },
        { 
            name:  "Michael Keaton",
            age: 73,
            featured_in: Flash[0]._id,
            image_path: "https://www.imdb.com/name/nm0000474/mediaviewer/rm1929554433/?ref_=nm_ov_ph",
            isAlive: true,
            ethinicity: "American"
        },
        { 
            name:  "Amber Heard",
            age: 38,
            featured_in: Aquaman[0]._id,
            image_path: "https://www.imdb.com/name/nm1720028/mediaviewer/rm3117379072/?ref_=nm_ov_ph",
            isAlive: true,
            ethinicity: "American"
        },
        { 
            name:  "Jack Black",
            age: 55,
            featured_in: Mario[0]._id,
            image_path: "https://www.imdb.com/name/nm0085312/mediaviewer/rm2590282497/?ref_=nm_ov_ph",
            isAlive: true,
            ethinicity: "American"
        },
        { 
            name:  "Phoebe Waller-Bridge",
            age: 39,
            featured_in: Indiana[0]._id,
            image_path: "https://www.imdb.com/name/nm3564817/mediaviewer/rm1887250944/?ref_=nm_ov_ph",
            isAlive: true,
            ethinicity: "Britain"
        }

    ]

    await Actors.insertMany(actor)
    console.log("Created actors")
}
const run = async () => {
    await main()
    db.close()
}

run()