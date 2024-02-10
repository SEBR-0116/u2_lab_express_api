const db = require('../db')
const Movie = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        {
            title : "The Holdovers",
            director: "Alexander Payne",
            run_time : 133,
            rating : 8,
            year_released : '2023',
            description : "A cranky history teacher at a remote prep school is forced to remain on campus over the holidays with a troubled student who has no place to go and a grieving cook.",
            image : "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            reviews : [{type: Schema.Types.ObjectId, ref: 'review_id'}],
            actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
        },
        {
            title : "American Fiction",
            director: "Cord Jefferson",
            run_time : 117,
            rating : 7.8,
            year_released : '2023',
            description : "A novelist who's fed up with the establishment profiting from Black entertainment uses a pen name to write a book that propels him into the heart of the hypocrisy and madness he claims to disdain.",
            image : "https://m.media-amazon.com/images/M/MV5BZDlkZmRlYTctNGJmNy00MjVkLThjZDQtMWY5Zjg2NjlhZDZkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
            reviews : [{type: Schema.Types.ObjectId, ref: 'review_id'}],
            actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
        },
        {
            title : "The Zone of Interest",
            director: "Jonathan Glazer",
            run_time : 105,
            rating : 7.9,
            year_released : '2023',
            description : "Auschwitz commandant Rudolf Höss and his wife Hedwig strive to build a dream life for their family in a house and garden beside the camp.",
            image : "https://m.media-amazon.com/images/M/MV5BYzRmOGQwZjktYjM2Ni00M2NmLWFlZDYtZGFhM2RkM2VhZDI1XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
            reviews : [{type: Schema.Types.ObjectId, ref: 'review_id'}],
            actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
        },
        {
            title : "Barbie",
            director: "Greta Gerwig",
            run_time : 114,
            rating : 6.9,
            year_released : '2023',
            description : "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
            image : "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
            reviews : [{type: Schema.Types.ObjectId, ref: 'review_id'}],
            actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
        },
        {
            title : "Oppenheimer",
            director: "Christopher Nolan",
            run_time : 180,
            rating : 8.4,
            year_released : '2023',
            description : "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
            image : "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
            reviews : [{type: Schema.Types.ObjectId, ref: 'review_id'}],
            actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
        },
        {
            title : "Poor Things",
            director: "Yorgos Lanthimos",
            run_time : 141,
            rating : 8.4,
            year_released : '2023',
            description : "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
            image : "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
            reviews : [{type: Schema.Types.ObjectId, ref: 'review_id'}],
            actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
        },
        {
            title : "Past Lives",
            director: "Celine Song",
            run_time : 105,
            rating : 7.9,
            year_released : '2023',
            description : "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea. Twenty years later, they are reunited for one fateful week as they confront notions of love and destiny.",
            image : "https://m.media-amazon.com/images/M/MV5BOTkzYmMxNTItZDAxNC00NGM0LWIyODMtMWYzMzRkMjIyMTE1XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_FMjpg_UX1000_.jpg",
            reviews : [{type: Schema.Types.ObjectId, ref: 'review_id'}],
            actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
        },
        {
            title : "Anatomy of a Fall",
            director: "Justine Triet",
            run_time : 151,
            rating : 7.8,
            year_released : '2023',
            description : "A woman is suspected of murder after her husband's death, and their visually challenged son faces a moral dilemma as the main witness.",
            image : "https://m.media-amazon.com/images/M/MV5BMDBiYmRkNjUtYzc4My00NGFiLWE2NWUtMGU1ZDA1NTQ3ZjQwXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
            reviews : [{type: Schema.Types.ObjectId, ref: 'review_id'}],
            actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
        },   
        {
            title : "Maestro",
            director: "Bradley Cooper",
            run_time : 129,
            rating : 6.6,
            year_released : '2023',
            description : "This love story chronicles the lifelong relationship of conductor-composer Leonard Bernstein and actress Felicia Montealegre Cohn Bernstein.",
            image : "https://m.media-amazon.com/images/M/MV5BOGI2MzQ1NzQtMmVkOC00ZGI0LWI3YjQtN2FjMzQ1NmRhNzFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
            reviews : [{type: Schema.Types.ObjectId, ref: 'review_id'}],
            actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
        },
        {
            title : "Killers of the Flower Moon",
            director: "Martin Scorsese",
            run_time : 206,
            rating : 7.7,
            year_released : '2023',
            description : "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
            image : "https://m.media-amazon.com/images/M/MV5BOGI2MzQ1NzQtMmVkOC00ZGI0LWI3YjQtN2FjMzQ1NmRhNzFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
            reviews : [{type: Schema.Types.ObjectId, ref: 'review_id'}],
            actors : [{type: Schema.Types.ObjectId, ref: 'actor_id'}]
        },
    ]

    await Movie.insertMany(movies)
    console.log('inserted movies!')
}

const run = async () => {
    await main()
    db.close()
}

run()