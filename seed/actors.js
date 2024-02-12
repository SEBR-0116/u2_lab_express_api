const db = require('../db')
const Actor = require('../models/Actor')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
try {


    const actors = [

    { name:'Robert Downey Jr',
       age:45,
       alive: true,
       movie:'The Avengers',
       image: 'https://en.wikipedia.org/wiki/File:Robert_Downey_Jr_2014_Comic_Con_(cropped).jpg'
       
    },
    {
        name:'Chris Evans',
        age:34,
        alive: true,
        movie: 'The Avengers',
        image: 'https://en.wikipedia.org/wiki/File:ChrisEvans2023.jpg'
    },
    {
        name: "Scarlett Johansson",
        age:36,
       alive: true,
       movie: 'The Avengers',
        image:'https://en.wikipedia.org/wiki/File:Scarlett_Johansson_by_Gage_Skidmore_2_(cropped,_2).jpg'
      
      },
      {
        name: "Chris Hemsworth",
        age:35,
        alive: true,
        movie: 'The Avengers',
        image:'https://en.wikipedia.org/wiki/File:Chris_Hemsworth_by_Gage_Skidmore_2_(cropped).jpg'
        
      },
      {
        name: "Mark Ruffalo",
        age:46,
       alive: true,
       movie: 'The Avengers',
        image:'https://en.wikipedia.org/wiki/File:Mark_Ruffalo_(36201774756)_(cropped).jpg'
       
      },
      {
        name: "Christian Bale",
        age:39,
       alive: true,
       movie: 'The Avengers',
        image:  "https://en.wikipedia.org/wiki/File:Christian_Bale-7837.jpg"
       
      },
      {
        name: "Amy Adams",
        age:38,
        alive: true,
        movie: 'American Hustle',
        image:  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Amy_Adams_UK_Nocturnal_Animals_Premiere_%28cropped%29.jpg/220px-Amy_Adams_UK_Nocturnal_Animals_Premiere_%28cropped%29.jpg"
      
      },
      {
        name: "Bradley Cooper",
        age:39,
        alive: true,
        movie: 'American Hustle',
        image:  "https://en.wikipedia.org/wiki/File:Bradley_Cooper_2023_(cropped).jpg"
       
      },
      {
        name: "Jennifer Lawrence",
        age:31,
        alive: true,
        movie: 'American Hustle',
        image:  "https://en.wikipedia.org/wiki/File:Jennifer_Lawrence_in_2016.jpg"
        
      },
      {
        name: "Jeremy Renner",
        age:42,
       alive: true,
       movie:['Captain America: Civil War','The Avengers'],
        image:  "https://en.wikipedia.org/wiki/File:Jeremy_Renner_by_Gage_Skidmore_2.jpg"
       
      },
      {
        name: "Hayley Atwell",
        age:27,
       alive: true,
       movie:'Captain America: Civil War',
        image:  "https://en.wikipedia.org/wiki/File:Hayley_Atwell_at_Awesome_Con_2022_DC_(cropped).jpg"
       
      },
      {
        name: "Sebastian Stan",
        age:38,
       alive: true,
       movie:'Captain America: Civil War',
        image:  "https://en.wikipedia.org/wiki/File:Sebastian_Stan_by_Gage_Skidmore_2_(cropped).jpg"
       
      },
      {
        name: "Tommy Lee Jones",
        age:36,
       alive: true,
       movie:'Captain America: Civil War',
        image:  "https://en.wikipedia.org/wiki/File:Tommy_Lee_Jones_the_Jury_President_at_Opening_Ceremony_of_the_Tokyo_International_Film_Festival_2017_(25332220247).jpg"
      
      },
      {
        name: "Hugo Weaving",
        age:28,
        alive: true,
        movie:'Captain America: Civil War',
        image:  "https://en.wikipedia.org/wiki/File:MJK_08925_Hugo_Weaving_(Berlinale_2018)_bw43.jpg"
        
      }

    ]
    await Actor.insertMany(actors)
    console.log("Actors created successfully!")
} catch (error) {
    console.error("Error creating movies:", error)
}
}


const run = async () => {
    await main()
    db.close()
}

run()