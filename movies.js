const search = document.querySelector('#textInput')
const button = document.querySelector('#submitButton')
const title = document.querySelector('#movie-title')
const year = document.querySelector('#year')
const rating = document.querySelector('#rating')
const runtime = document.querySelector('#runtime')
const poster = document.querySelector('#poster')
const actors = document.querySelector('#actors')
const oscars = document.querySelector('#oscars')
    oscars.style.display = 'none'
const wins = document.querySelector('#wins')
    wins.style.display = 'none'
    const noWins = document.querySelector('#no-wins')
        noWins.style.display = 'none'
const noms = document.querySelector('#noms')
    noms.style.display = 'none'
    const noNoms = document.querySelector('#no-noms')
        noNoms.style.display = 'none'
const reviews = document.querySelector('#reviews')
    reviews.style.display = 'none'
    const reviewHeading = document.querySelector('#review-heading')
    reviewHeading.style.display = 'none'

const mtitle = document.querySelector('#mtitle')
const mruntime = document.querySelector('#mruntime')
const myear = document.querySelector('#myear')
const mrating = document.querySelector('#mrating')
const mdescription = document.querySelector('#mdescription')
const mactors = document.querySelector('#mactors')
const mwins = document.querySelector('#mwins')
const mnoms = document.querySelector('#mnoms')
const mposter = document.querySelector('#mposter')
const submitMovie = document.querySelector('#add-movie')
const editMovie = document.querySelector('#edit-movie')
const deleteMovie = document.querySelector('#delete-movie')
const editActors = document.querySelector('#edit-actors')
    let query = 'add'

const rscore = document.querySelector('#rscore')
const rreviewer = document.querySelector('#rreviewer')
const rcomment = document.querySelector('#rcomment')
const rurl = document.querySelector('#rurl')
const rmovie = document.querySelector('#rmovie')
const submitReview = document.querySelector('#submit-review')

const removeChildNodes = (details) => {
    while (details.firstChild) {
        details.removeChild(details.firstChild)
    }
}

const searchMovie = async(input) => {
    const call = await axios.get(`http://localhost:3001/movies/title/${input}`)
    const movie = call.data

    editMovie.value = movie._id
    deleteMovie.value = movie._id
    title.innerHTML = movie.title
    year.innerHTML = movie.year
    rating.innerHTML = movie.rating
    runtime.innerHTML = `${movie.runtime} minutes`
    poster.setAttribute('src', movie.poster)

    for (let i=0; i<movie.actors.length; i++) {
        const actorInfo = await axios.get(`http://localhost:3001/actors/id/${movie.actors[i]._id}`)
        const actor = document.createElement('figure')
        const actorName = document.createElement('figcaption')
        const headshot = document.createElement('img')
        actorName.innerHTML = actorInfo.data.name
        headshot.setAttribute('src', actorInfo.data.headshot)
        actor.appendChild(actorName)
        actorName.after(headshot)
        actors.appendChild(actor)
    }
    
    if (movie.oscars) {
        oscars.style.display = ''
        if (movie.oscars.wins.length > 0) {
            noWins.style.display = 'none'
            wins.style.display = ''
            for (let i=0; i<movie.oscars.wins.length; i++) {
                const win = wins.appendChild(document.createElement('li'))
                win.innerHTML = movie.oscars.wins[i]
            }
        } else {
            noWins.style.display = ''
            wins.style.display = 'none'
        }
        if (movie.oscars.nominations.length >0) {
            noNoms.style.display = 'none'
            noms.style.display = ''
            for (let i=0; i<movie.oscars.nominations.length; i++) {
                const nom = noms.appendChild(document.createElement('li'))
                nom.innerHTML = movie.oscars.nominations[i]
            }
        } else {
            noNoms.style.display = ''
            noms.style.display = 'none'
        }
    }

    const reviewCall = await axios.get(`http://localhost:3001/reviews/movie/${input}`)
    if (reviewCall.data) {
        reviews.style.display = ''
        reviewHeading.style.display = ''
        for (let i=0; i < reviewCall.data.length; i++) {
            const review = document.createElement('dl')
            const reviewer = review.appendChild(document.createElement('dt'))
            reviewer.innerHTML = `<a href="${reviewCall.data[i].url}">${reviewCall.data[i].reviewer}</a> (${reviewCall.data[i].score}%)`
            const comment = review.appendChild(document.createElement('dd'))
            comment.innerHTML = reviewCall.data[i].comment
            reviews.appendChild(review)
        }
    } else {
        reviews.style.display = 'none'
        reviewHeading.style.display = 'none'
    }
}

const addMovie = () => {
    const title = mtitle.value
    const runtime = mruntime.value
    const year = myear.value
    const rating = mrating.value
    const description = mdescription.value
    const actors = mactors.value
    const wins = mwins.value
    const noms = mnoms.value
    const poster = mposter.value

    const actorArray = actors.split(', ')
    const winsArray = wins.split(', ')
    const nomsArray = noms.split(', ')


    axios.post("http://localhost:3001/movies/add", {
        title: title,
        runtime: runtime,
        year: year,
        rating: rating,
        description: description,
        actors: actorArray,
        oscars: {
            nominations: nomsArray,
            wins: winsArray
        },
        poster: poster
    })
    .then((response) => {
        console.log(response)
    })
    location.reload
}

const addReview = () => {
    const score = rscore.value
    const reviewer = rreviewer.value
    const comment = rcomment.value
    const url = rurl.value
    const movie = rmovie.value

    axios.post("http://localhost:3001/reviews/add", {
        score: score,
        reviewer: reviewer,
        comment: comment,
        url: url,
        movie: movie
    })
    .then((response) => {
        console.log(response)
    })
    location.reload
}

// adapted from https://stackoverflow.com/questions/76867978/how-to-prevent-sending-axios-patch-response-of-existing-and-empty-form-data
const updateFilm = () => {
    const title = mtitle.value
    const runtime = mruntime.value
    const year = myear.value
    const rating = mrating.value
    const description = mdescription.value
    const actors = mactors.value
    const wins = mwins.value
    const noms = mnoms.value
    const poster = mposter.value

    const actorArray = actors.split(', ')
    const winsArray = wins.split(', ')
    const nomsArray = noms.split(', ')

    const data = {
        title: title,
        runtime: runtime,
        year: year,
        rating: rating,
        description: description,
        actors: actorArray,
        oscars: {
            nominations: nomsArray,
            wins: winsArray
        },
        poster: poster
    }

    const filteredData = Object.fromEntries(Object.entries(data).filter(([_, value]) => value !== null && value !== ""))

    axios.patch(`http://localhost:3001/movies/id/${editMovie.value}`, filteredData)
    .then((response) => {
        console.log(response)
    })
    location.reload
}

const deleteFilm = () => {
    axios.delete(`http://localhost:3001/movies/id/${deleteMovie.value}`)
    location.reload
}

button.addEventListener('click', () => {
    const textInput = search.value
    const input = textInput.replaceAll(/ /g, '%20')
    removeChildNodes(wins)
    removeChildNodes(noms)
    removeChildNodes(reviews)
    removeChildNodes(actors)
    searchMovie(textInput)
})

submitMovie.addEventListener('click', () => {
    addMovie()
})

editMovie.addEventListener('click', () => {
    if (query === 'add') {
        updateFilm()
    } else if (query === 'delete') {
        updateActors()
    }
})

deleteMovie.addEventListener('click', () => {
    deleteFilm()
})

submitReview.addEventListener('click', () => {
    addReview()
})

editActors.addEventListener('change', () => {
    const index = editActors.selectedIndex
    query = typeOfQuery.options[index].value
})