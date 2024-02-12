const db = require('../db')
const Review = require('../models/Reviews')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
 const reviews=[
    {
       movieName: "The Avengers",
       movie_id:'1',
       sourceName: "IMDb",
       numberOfStars: 5,
       comments:  [
        "An epic superhero ensemble with thrilling action and charismatic performances. A cinematic triumph.",
        "A true blockbuster that delivers on every level. The Avengers assemble in spectacular fashion!"
      ],
      actor_id:'1',
       image: "https://example.com/the_avengers_review1_image.jpg"
      },
      {
        movieName: "The Avengers",
        movie_id:'1',
        sourceName: "Rotten Tomatoes",
        numberOfStars: 4.5,
        comments:[
            "A crowd-pleasing blockbuster with spectacular visual effects and a well-crafted storyline. Highly entertaining.",
            "The Avengers sets a new standard for superhero movies. It's a must-see for fans of the genre."
          ],
          actor_id:1,
          image:  "https://example.com/the_avengers_review2_image.jpg"
      },
      {
        movieName: "The Avengers",
        movie_id:'1',
        sourceName: "Metacritic",
        numberOfStars: 4,
        comments:[
            "A thrilling ride from start to finish. The perfect blend of action, humor, and heart.",
            "The Avengers is a monumental achievement in cinematic storytelling. It's pure entertainment."
          ],
          actor_id:'1',
          image:  "https://example.com/the_avengers_review3_image.jpg"
      },
      {
        movieName: "American Hustle",
        movie_id:'1',
        sourceName: "IMDb",
        numberOfStars: 4,
        comments:  [
            "A stylish crime drama with standout performances and a gripping narrative. Highly recommended.",
            "American Hustle is a slick and stylish film that keeps you guessing until the very end."
          ],
          actor_id:'1',
          image: "https://example.com/american_hustle_review1_image.jpg"
      },
      {
        movieName: "American Hustle",
        movie_id:'1',
        sourceName: "Rotten Tomatoes",
        numberOfStars: 4.5,
        comments: [
            "An engrossing tale of con artists with sharp writing and memorable characters. A must-watch.",
            "American Hustle is a brilliant display of filmmaking prowess. It's a modern classic."
          ],
          actor_id:'1',
          image: "https://example.com/american_hustle_review2_image.jpg"
      },
      {
        movieName:"American Hustle",
        movie_id:'1',
        sourceName: "Metacritic",
        numberOfStars: 4,
        comments:  [
            "A captivating exploration of ambition and deception with stellar performances. Truly compelling.",
            "American Hustle is a captivating journey into the world of 1970s corruption and glamour."
          ],
          actor_id:'1',
         image: "https://example.com/american_hustle_review3_image.jpg"
      },
      {
        movieName: "Captain America",
        movie_id:'1',
        sourceName: "IMDb",
        numberOfStars: 4.5,
        comments:[ "A thrilling origin story with heart and heroism. Chris Evans shines as Captain America.",
                   "Captain America delivers a rousing adventure filled with action, humor, and heartwarming moments." ],
         actor_id:'1',
         image: "https://example.com/captain_america_review1_image.jpg"
      },
      {
        movieName: "Captain America",
        movie_id:'1',
        sourceName: "Rotten Tomatoes",
        numberOfStars: 4,
        comments: [
            "A solid entry in the Marvel Cinematic Universe with exciting action and a strong lead performance.",
            "Captain America is a perfect blend of old-school heroism and modern blockbuster spectacle."
          ],
          actor_id:'1',
        image: "https://example.com/captain_america_review2_image.jpg"
      },
      {
        movieName: "Captain America",
        movie_id:'1',
        sourceName: "Metacritic",
        numberOfStars: 4,
        comments:["An entertaining and patriotic adventure that delivers on both action and emotion.",
        "Captain America is a true symbol of heroism and hope, with thrilling action sequences and a compelling story."],
        actor_id:'1',
        image: "https://example.com/captain_america_review3_image.jpg"
      }
 ]
    await Review.insertMany(reviews)
    console.log("We Created some reviews !")
}
const run = async () => {
    await main()
    db.close()
}

run()