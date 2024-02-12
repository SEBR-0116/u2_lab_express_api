const { response } = require('express')
const { Actor } = require('../models')

const getAllActors = async (request,response) => {
try{
    const actors = await Actor.find()
    return response.json(actors)
} catch(error){
    return response.status(500).send(error.message)
}
}

const getActorById = async (request,response) => {

    try{
        const {id} = request.params
        const actor = await Actor.findById(id)
        if(actor){
           return response.json(actor)
        }
            return response.status(404).send(`Bad request : Actor with the ${request.params} does not exisit`)
        } catch (error){
            return response.status(500).send(error.message)
        }
}

const createActor = async (request,response) => {
    try{
        const actor = await new Actor(request.body)
        await actor.save()
        return response.status(201).json({
            actor,
        })
    } catch (error){
        return response.status(500).json({error:error.message})
    }
}

const updateActor = async (request,response) => {
    try{
        let {id} = request.params
        let actors = await Actor.findByIdAndUpdate(id, request.body,{new:true})
        if(actors){
            return response.status(200).json(actors)
        }
        throw new Error("Actor not found")
    }catch(error){
        return response.status(500).send(error.message)
    }
}

const deleteActor = async (request,response) => {
    try{
        const { id }= request.params
        const deleteActor = await Actor.findByIdAndDelete(id)
        if(deleteActor){
            return response.status(200).send("Actor Deleted!")
        }
        throw new Error ("Actor not found")
    }
    catch(error){
        return response.status(500).send(error.message)
    }
}


//Get Movie by title
const getActorByName = async (request,response) => {
    try{
        const req_name = request.params
        const actorsBy_Name = await Actor.find({name: {$regex: new RegExp(req_name.name,'i')}}) 
        if(actorsBy_Name ){
            return response.json(actorsBy_Name )
        }
            return response.status(404).send(` There is no actors found under ${request.params.name} name`)
        
    }catch(error){
        return response.status(500).send(error.message)
    }
}




// //Get Movie by year
// const getActorByAge = async (request,response) => {
//     try{
//         const req_Actor_age = request.params
//         const moviesBy_year = await Actor.find({
//             $expr: {
//                 $eq: [
//                     { $year: "$year_release" }, 
//                     req_movie_year
//                 ]
//             }
//         }) 
//         if(moviesBy_year){
//             response.json(moviesBy_year)
//         }else{
//             response.status(404).send(` There is no movies found released on ${request.params} year `)
//         }
//     }catch(error){
//         return response.status(500).send(error.message)
//     }
// }

const getActorDetailsForMovie = async (request,response) =>{
    try{
        const req_movie_details = request.params.id
        // console.log('================')
        // console.log(req_movie_details)
        // console.log('================')
        const actors_detail_Movie =  await Actor.find({movie_id: req_movie_details})
        if(actors_detail_Movie){
            return response.json(actors_detail_Movie)
        }
        return response.status(404).send(`There is no actors found for ${request.params} id`)

    }catch(error){
        return response.status(500).send(error.message)
        }
}


module.exports = {
    getAllActors,
    getActorById,
    createActor,
    updateActor,
    deleteActor,
    getActorByName,
    getActorDetailsForMovie
}