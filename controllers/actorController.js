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
            return response.status(404).send('Movie with the specified ID does not exisit')
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
module.exports = {
    getAllActors,
    getActorById,
    createActor,
    updateActor,
    deleteActor
}