// /inputs
let input_actor = document.querySelector('#input-actor')

//buttons
let search_actor_btn = document.querySelector('#search-actor-btn')
let submit_btn =document.querySelector('#submit-btn')


//images
let actor_image_img = document.querySelector('.actor-image')



//Divs
let actor_description = document.querySelector('.actor-description')
let actor_info = document.querySelector('.actor-info')
let list_cast= document.querySelector('#list-cast')


//Input Forms
let name_input = document.querySelector('#name')
let dob_input = document.querySelector('#dob')
let gender_input = document.querySelector('#gender')
let rank_input = document.querySelector('#rank')
let hit_input = document.querySelector('#hit_blockbuster')
let img_input = document.querySelector('#image')
let nationality_input = document.querySelector('#nationality')
let is_active_input = document.querySelector('#is_active')

//pageload
get_All_Actros_Thumbnail()

search_actor_btn.addEventListener('click',()=>{
    search_by_name()
    get_All_Actros_Thumbnail()
})

submit_btn.addEventListener('click',()=>{
    createNewActor()
})

async function search_by_name(){
try{
    let response = await axios.get(`http://localhost:3001/actors/actor/${input_actor.value}`)
    // console.log(input_Movie.value)
    console.log(response.data[0])
    const currentDate = new Date().getFullYear
    // const dobActor = new Date(response.data[0].bob).getFullYear
    // const age = currentDate - dobActor
    actor_image_img.innerHTML =`<img src=${response.data[0].image}>`
    actor_info.innerHTML =`     <p class="font-style"> Name         : ${response.data[0].name} </p>
                                <p class="font-style"> D.O.B        : ${new Date(response.data[0].dob).toDateString()}</p>
                                <p class="font-style"> Gender       : ${response.data[0].gender}</p>
                                <p class="font-style"> Nationality  : ${response.data[0].nationality}</p>
                                <p class="font-style"> Rank (Male)  : ${response.data[0].rank}</p>
                                <p class="font-style"> Blockbuster-Hit: ${response.data[0].hit_blockbuster}</p>                                
                                `

    name_input.value = response.data[0].name
    dob_input.value = new Date(response.data[0].dob)
    gender_input.value = response.data[0].gender
    rank_input.value = response.data[0].rank
    hit_input.value = response.data[0].hit_blockbuster
    img_input.value = response.data[0].image
    nationality_input.value = response.data[0].nationality
   
    if(   response.data[0].is_active = true ){
        is_active_input.checked =true
    }else{
        is_active_input.checked =false
    }
    

}catch(error){
   console.log(error.message)
}
   
}

async function get_All_Actros_Thumbnail(){
    try{

        let response = await axios.get(`http://localhost:3001/actors`)
        console.log(response.data)
        let list_of_actors =[response.data]
        console.log(list_of_actors)
        let data_list =""
        list_of_actors[0].map((element) => {
            data_list +=    `<ul id="ul-long" style="background-color: #e0e0e0">
                            <li class="li-long"><img class="img-Size" src=${element.image}> </li>
                            <li class="li-long"> ${element.name} </li>
                            </ul>
            `
        })
        list_cast.innerHTML = data_list
    }catch(error)
    {

    }
}

async function createNewActor(){

    try{     
        axios.post(`http://localhost:3001/actors`,{
            name: name_input.value,
            dob: new Date(dob_input.value).toDateString(),
            gender: gender_input.value,
            rank: rank_input.value,
            hit_blockbuster: hit_input.value,
            image:img_input.value,
            nationality: nationality_input.value,
            is_active: is_active_input.value
        })
        .then((response) =>  response)
        .catch((error) => console.log(error))
    }catch(error)
    {
        console.log(error.message)
    }
}
// https://blog.logrocket.com/how-to-use-axios-post-requests/