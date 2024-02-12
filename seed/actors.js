const db = require('../db')
const { Actor, Movie } = require('./models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//attached to db; error alert if anything goes wrong

const main = async () => {
    const beforeWeGo = await Movie.find({ name: 'Before We Go' })
    const aCinderellaStory = await Movie.find({ name: 'A Cinderella Story' })
    const thePrincessDiaries = await Movie.find({ name: 'The Princess Diaries' })
    const thePrinceNMe = await Movie.find({ name: 'The Prince N Me' })
    const theGrayMan = await Movie.find({ name: 'The Gray Man' })
    const theNotebook = await Movie.find({ name: 'The Notebook' })

    const actors = [
        {
            movie_id: beforeWeGo[0]._id,
            name: 'Chris Evans',
            age: 42,
            alive: true,
            actorImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmYkSjT8PQDrONwIRa2sCOPNibCYmwK09NnCLgSUI7fLzikc8'
        },
        {
            movie_id: beforeWeGo[0]._id,
            name: 'Alice Eve',
            age: 42,
            alive: true,
            actorImg: 'https://m.media-amazon.com/images/M/MV5BOTM5NzI1NTMwN15BMl5BanBnXkFtZTcwOTQ0NjExNw@@._V1_.jpg'
        },
        {
            movie_id: aCinderellaStory[0]._id,
            name: 'Hilary Duff',
            age: 36,
            alive: true,
            actorImg: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-12/hilary-duff-jp-221209-354ee6.jpg'
        },
        {
            movie_id: aCinderellaStory[0]._id,
            name: 'Chad Michael Murray',
            age: 42,
            alive: true,
            actorImg: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOKXy4Pc7FQF8rGIPI2GQuwGp_XiFz7GkSpOAbpEzC0MnflSPn'
        },
        {
            movie_id: aCinderellaStory[0]._id,
            name: 'Dan Byrd',
            age: 38,
            alive: true,
            actorImg: 'https://m.media-amazon.com/images/M/MV5BZTQ3NTBkYTItNmQ0OC00YWQyLWIxYjctNDIzYjZiMmRmY2U4XkEyXkFqcGdeQXVyNjM2NDE5NTc@._V1_.jpg'
        },
        {
            movie_id: thePrincessDiaries[0]._id,
            name: 'Anne Hathaway',
            age: 41,
            alive: true,
            actorImg: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjg-wdQ73fmThMhLY2GYJeUX9cxTO9Vvdw7YYm7L5LN2ByfdU2'
        },
        {
            movie_id: thePrincessDiaries[0]._id,
            name: 'Julie Andrews',
            age: 88,
            alive: true,
            actorImg: 'https://hips.hearstapps.com/hmg-prod/images/julie-andrews-at-carol-burnett-90-years-of-laughter-love-news-photo-1701458360.jpg'
        },
        {
            movie_id: thePrinceNMe[0]._id,
            name: 'Julia Stiles',
            age: 42,
            alive: true,
            actorImg: 'https://m.media-amazon.com/images/M/MV5BMTgxNjUxNDk3MF5BMl5BanBnXkFtZTcwMzM0NjA0NA@@._V1_.jpg'
        },
        {
            movie_id: theGrayMan[0]._id,
            name: 'Ryan Gosling',
            age: 43,
            alive: true,
            actorImg: 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fcontent.2Fuploads.2F2018.2F10.2Fryan-gosling.2Ejpg/1200x1200/quality/80/crop-from/center/5-choses-a-savoir-sur-ryan-gosling.jpeg'
        },
        {
            movie_id: theNotebook[0]._id,
            name: 'Rachel McAdams',
            age: 45,
            alive: true,
            actorImg: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAiPSrlqtpQIS-Bfzwkk9gvD4iigruwHOv68DcfD-WqKsV9Ur8'
        }
    ]
    await Actor.insertMany(actors)
    console.log("Created list of actors!")
}
const run = async () => {
    await main()
    db.close()
}

run()