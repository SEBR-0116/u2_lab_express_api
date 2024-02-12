const db = require('../db')
const { Review, Movie } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const movies = await Movie.find({},{_id: 1, title: 1})
    console.log(movies)

    const reviews = [
        //Barbie Reviews
        {
            score: 85,
            comment: "A delightful movie for children, with beautiful animation and a heartwarming story.",
            movie: movies[0]._id
        },
        {
            score: 90,
            comment: "Barbie is a fantastic film that captures the essence of childhood imagination and adventure.",
            movie: movies[0]._id
        },
        {
            score: 80,
            comment: "As a Barbie enthusiast, I absolutely loved this movie! It's filled with fun and positivity.",
            movie: movies[0]._id
        },
        //The Sound of Music
        {
            score: 95,
            comment: "An absolute classic! The music, the performances, and the story are all superb.",
            movie: movies[1]._id
        },
        {
            score: 90,
            comment: "I grew up watching this movie, and it never fails to bring me joy. A timeless masterpiece.",
            movie: movies[1]._id
        },
        {
            score: 85,
            comment: "Julie Andrews shines in this heartwarming musical. A must-watch for all generations.",
            movie: movies[1]._id
        },
        //Mary Poppins
        {
            score: 90,
            comment: "A charming and whimsical film that brings magic to life. Julie Andrews is enchanting as Mary Poppins.",
            movie: movies[2]._id
        },
        {
            score: 85,
            comment: "Mary Poppins is a timeless classic that never fails to bring a smile to my face. A delightful family movie.",
            movie: movies[2]._id
        },
        {
            score: 88,
            comment: "This movie is practically perfect in every way! A true Disney gem that captures the imagination.",
            movie: movies[2]._id
        },
        //Inception
        {
            score: 95,
            comment: "A mind-bending masterpiece! Inception is a gripping film that keeps you on the edge of your seat from start to finish.",
            movie: movies[3]._id
        },
        {
            score: 90,
            comment: "Christopher Nolan's genius shines through in Inception. The concept is brilliant, and the execution is flawless.",
            movie: movies[3]._id
        },
        {
            score: 88,
            comment: "Inception is a cinematic marvel. The visuals, the storytelling, and the performances are all top-notch.",
            movie: movies[3]._id
        },
        //Dark Knight
        {
            score: 98,
            comment: "The Dark Knight is a cinematic masterpiece! Heath Ledger's performance as the Joker is legendary.",
            movie: movies[4]._id
        },
        {
            score: 95,
            comment: "A dark and gripping portrayal of the Batman universe. The Dark Knight sets a new standard for superhero movies.",
            movie: movies[4]._id
        },
        {
            score: 92,
            comment: "Christopher Nolan's direction combined with outstanding performances make The Dark Knight an unforgettable experience.",
            movie: movies[4]._id
        },
        //Pulp Fiction
        {
            score: 95,
            comment: "Pulp Fiction is a groundbreaking film that redefined the crime genre. Tarantino's storytelling is unparalleled.",
            movie: movies[5]._id
        },
        {
            score: 90,
            comment: "A cult classic with unforgettable characters and iconic dialogue. Pulp Fiction is a must-see for movie buffs.",
            movie: movies[5]._id
        },
        {
            score: 88,
            comment: "Quentin Tarantino's Pulp Fiction is a bold and stylish masterpiece that remains as impactful today as it was upon release.",
            movie: movies[5]._id
        },
        // Forrest Gump
        {
            score: 95,
            comment: "Forrest Gump is a heartwarming and timeless classic. Tom Hanks delivers an unforgettable performance.",
            movie: movies[6]._id
        },
        {
            score: 90,
            comment: "A beautiful and touching film that captures the essence of life's journey. Forrest Gump is a true cinematic gem.",
            movie: movies[6]._id
        },
        {
            score: 92,
            comment: "Forrest Gump is a remarkable film that blends humor, drama, and emotion seamlessly. A must-watch for all audiences.",
            movie: movies[6]._id
        },
        //The Matrix
        {
            score: 95,
            comment: "The Matrix is a groundbreaking sci-fi masterpiece that revolutionized visual effects and storytelling.",
            movie: movies[7]._id
        },
        {
            score: 90,
            comment: "An iconic film that explores deep philosophical concepts while delivering thrilling action sequences. The Matrix is a must-see.",
            movie: movies[7]._id
        },
        {
            score: 88,
            comment: "The Matrix is a mind-bending experience that challenges perceptions and leaves a lasting impression. A true classic of the genre.",
            movie: movies[7]._id
        },
        // Fight Club
        {
            score: 95,
            comment: "Fight Club is a thought-provoking and intense film that challenges societal norms. A must-watch for those who enjoy psychological thrillers.",
            movie: movies[8]._id
        },
        {
            score: 90,
            comment: "An edgy and gripping film with a powerful message. Fight Club is a cinematic experience that stays with you long after the credits roll.",
            movie: movies[8]._id
        },
        {
            score: 88,
            comment: "Fight Club is a raw and visceral exploration of masculinity and consumerism. David Fincher's direction is masterful.",
            movie: movies[8]._id
        },
        // Instertellar
        {
            score: 95,
            comment: "Interstellar is a visually stunning and emotionally powerful journey through space and time. Christopher Nolan's masterpiece.",
            movie: movies[9]._id
        },
        {
            score: 90,
            comment: "A mind-bending and epic sci-fi adventure that explores the depths of human exploration and sacrifice. Interstellar is awe-inspiring.",
            movie: movies[9]._id
        },
        {
            score: 88,
            comment: "Interstellar is a captivating and thought-provoking film that pushes the boundaries of the genre. A must-watch for fans of science fiction.",
            movie: movies[9]._id
        }
    ]

    await Review.insertMany(reviews)
    console.log('Reviews have been successfully seeded to the database')
}

const run = async () => {
    await main()
    db.close()
}

run()