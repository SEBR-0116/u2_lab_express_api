const db = require('../db')
const { Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const banshees = await Movie.find({title: 'The Banshees of Inisherin'})
    const dunkirk = await Movie.find({title: 'Dunkirk'})
    const inception = await Movie.find({title: 'Inception'})

    const reviews = [
        {
            score: 80,
            comment: 'Strikingly funny and heartbreakingly honest, Martin McDonagh returns to form by telling the tale of a non-romantic breakup, the sadness of being dumped, and the tricky business of dumping someone.',
            reviewer: 'Screen Rant',
            url: 'https://screenrant.com/the-banshees-of-inisherin-2022-movie-reviews/',
            movie_id: banshees[0]._id
        },
        {
            score: 88,
            comment: 'The rat-a-tat of rifles and thunderous clatter of cannons are but a momentary distraction, piercing the peaceful quiet of the fictional Island on which he lives in playright and filmmaker Martin McDonagh\'s dark parable The Banshees of Inisherin.',
            reviewer: 'ScreenHub',
            url: 'https://thefilmfrenzy.com/2023/01/27/film-2022-the-years-10-best/',
            movie_id: banshees[0]._id
        },
        {
            score: 90,
            comment: 'Audiences are quite understandably going to consider Dunkirk a war film, quite possibly one of the great war films of our age. Christopher Nolan\'s tenth picture is possibly an even better survival horror movie.',
            reviewer: 'Cultural Conversation',
            url: 'https://culturalconversation.co.uk/2017/07/22/dunkirk-2017/',
            movie_id: dunkirk[0]._id
        },
        {
            score: 100,
            comment: 'At 106 minutes, Dunkirk is one of the shortest films of Nolan\'s career but on par with The Dark Knight as his best.',
            reviewer: 'The Cinematic Reel',
            url: 'https://thecinematicreel.com/reel-review-dunkirk/',
            movie_id: dunkirk[0]._id
        },
        {
            score: 88,
            comment: 'Nolan\'s strength here is his ability to place audiences right into the thick of the various struggles taking place by air, land and sea.',
            reviewer: 'Film Frenzy',
            url: 'https://thefilmfrenzy.com/2017/07/21/dunkirk-the-art-of-war/',
            movie_id: dunkirk[0]._id
        },
        {
            score: 90,
            comment: '"They say we only use a fraction of our brain\'s potential" we are told in Inception. The same will never be said of Nolan.',
            reviewer: 'NME',
            url: 'https://www.nme.com/reviews/reviews-movie-11438-306239',
            movie_id: inception[0]._id
        },
        {
            score: 100,
            comment: 'It is, simply put, a cerebral masterpiece from Christopher Nolan.',
            reviewer: 'Cinefilia',
            url: 'https://www.cinefilia.blog/2010/10/inception-2010.html',
            movie_id: inception[0]._id
        }
    ]

    await Review.insertMany(reviews)
    console.log('inserted')
}

const run = async() => {
    await main()
    db.close()
}

run()