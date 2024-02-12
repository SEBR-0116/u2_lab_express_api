const db = require('../db')
const Movies = require('../models/movies')
const Reviews = require('../models/reviews')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Aquaman = await Movies.find ( {title: "Aquaman"} )
    const Wonka = await Movies.find ( {title: "Wonka"} )
    const Mario = await Movies.find ( {title: "The Super Mario Bros. Movie"} )
    const Indiana = await Movies.find ( {title: "Indiana Jones and the Dial of Destiny"} )
    const Flash = await Movies.find ( {title: "The Flash"} )

    const review = [
        { 
            movie: Aquaman[0]._id,
            score: 6.8,
            comment: "Your usual style-over-substance comic book movie"
        },
        { 
            movie: Wonka[0]._id,
            score: 7.2,
            comment: "The best version of a cynical idea"
        },
        { 
            movie: Mario[0]._id,
            score: 7.0,
            comment: "Solid Example of Game to Screen Adaptation"
        },
        { 
            movie: Indiana[0]._id,
            score: 6.6,
            comment: "A Muddled Misadventure"
        },
        { 
            movie: Flash[0]._id,
            score: 6.7,
            comment: "Poorly used story and horrible CGI"
        },
        { 
            movie: Mario[0]._id,
            score: 7.0,
            comment: "Step into a world of whimsy, nostalgia, and unparalleled entertainment with The Super Mario Bros. Movie! As a fan of the beloved video game franchise, I had high expectations, and I'm thrilled to say that this film exceeded every single one of them. It's a delightful celebration of everything we love about Mario and his wacky adventures"
        },
        { 
            movie: Indiana[0]._id,
            score: 6.6,
            comment: "Really satisfying ending. I’ve been waiting for this movie for like 5 years. Great movie."
        },
        { 
            movie: Wonka[0]._id,
            score: 7.2,
            comment: "WONKA is one of if not the best use of complete creativity through the use of the bizarre and unbelievable which is so precisely tied together with its fascinating characters and brilliant storylines."
        }
    ]

    await Reviews.insertMany(review)
    console.log("View Reviews")
}
const run = async () => {
    await main()
    db.close()
}

run()