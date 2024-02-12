//inputs
let input_Movie = document.querySelector('#input-Movie')

//buttons
let search_Movie_btn = document.querySelector('#search-Movie-btn')


//images
let movie_image_img = document.querySelector('.movie-image')


//Divs
let movie_description = document.querySelector('.movie-description')
let movie_info = document.querySelector('.movie-info')
let list_cast = document.querySelector('.list-cast')
let list_review = document.querySelector('.list-review')





search_Movie_btn.addEventListener('click', ()=>{

    search_by_title()
    //search_for_all_movie()
    // get_Actor_By_movie_id()
})

async function search_by_title(){

    let response = await axios.get(`http://localhost:3001/movies/movie/${input_Movie.value}`)
    // console.log(input_Movie.value)
    //console.log(response.data[0])
    movie_image_img.innerHTML =`<p><img class="img-size" src=${response.data[0].image}></p>`
    movie_info.innerHTML =` <p class="font-style"> Title       : ${response.data[0].title} </p>
                            <p class="font-style"> Director    : ${response.data[0].director}</p>
                            <p class="font-style"> Gener       : ${response.data[0].gener}</p>
                            <p class="font-style"> Run Time    : ${response.data[0].runtime}</p>
                            <p class="font-style"> Rating      : ${response.data[0].rating}</p>
                            <p class="font-style"> Release     : ${new Date(response.data[0].year_release).toDateString()}</p>
                            `
    
    let responseActor = await axios.get(`http://localhost:3001/actors/movie/${response.data[0]._id}`)
    //console.log(responseActor.)
    let list_of_actors =[responseActor.data]
        //console.log(list_of_actors)
        let data_list =""
        list_of_actors[0].map((element) => {
            data_list +=    `<ul id="ul-long" style="background-color: #e0e0e0">
                            <li class="li-long"><img class="img-Size" src=${element.image}> </li>
                            <li class="li-long"> ${element.name} </li>
                            </ul>
            `
        })
        list_cast.innerHTML = data_list


        let responseReview = await axios.get(`http://localhost:3001/reviews/movie/${response.data[0]._id}`)
    //console.log(responseActor.)
    let list_of_reviews =[responseReview.data]
        console.log(list_of_reviews)
        let data_list_review =""
        list_of_reviews[0].map((element) => {
            data_list_review +=    `<ul id="ul-long-r" style="background-color: #e0e0e0">
                                    <li class="li-long-r">${element.score} </li>
                                    <li class="li-long-r"> ${element.comments} </li>
                                    </ul>
            `
        })
        list_review.innerHTML = data_list_review



}

async function get_Actor_By_movie_id(){

//  let responseActor = await axios.get(`http://localhost:3001/actors/movie/${input_Movie.value}`)
//     console.log(responseActor)
    //let list_actors = [response.data[]]
}

async function search_for_all_movie(){

    let response = await axios.get(`http://localhost:3001/movies`)
    //console.log(response.data)

    let list_all_movies = response.data
    console.log(list_all_movies)

    if(list_all_movies.length > 0) {
        // create_Dynamic_Table(['Title','Director','Actor'],list_all_movies,'.movies-list-table')
    }



}
