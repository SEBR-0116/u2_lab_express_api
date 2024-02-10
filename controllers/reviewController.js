const { response } = require('express')
const { Review } = require('../models')


const getAllReview = async (request,response) => {
    try{
        const reviews = await Review.find()
        return response.json(reviews)
    } catch(error){
        return response.status(500).send(error.message)
    }
}

const getReviewById = async (request,response) => {

    try{
        const {id} = request.params
        const review = await Review.findById(id)
        if(review){
           return response.json(review)
        }
            return response.status(404).send('Review with the specified ID does not exisit')
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


module.exports = {

    getAllReview,
    getReviewById

}
