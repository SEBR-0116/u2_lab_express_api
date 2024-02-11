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


const createReview = async (request,response) => {
    try{
        const review = await new Review(request.body)
        await review.save()
        return response.status(201).json({
            review,
        })
    } catch (error){
        return response.status(500).json({error:error.message})
    }
}

const updateReview = async (request,response) => {
    try{
        let {id} = request.params
        let review = await Review.findByIdAndUpdate(id, request.body,{new:true})
        if(review){
            return response.status(200).json(review)
        }
        throw new Error("Review not found")
    }catch(error){
        return response.status(500).send(error.message)
    }
}


const deleteReview = async (request,response) => {
    try{
        const { id }= request.params
        const deleteReview = await Review.findByIdAndDelete(id)
        if(deleteReview){
            return response.status(200).send("Review Deleted!")
        }
        throw new Error ("Review not found")
    }
    catch(error){
        return response.status(500).send(error.message)
    }
}
const getReviewBySortTypeAsceorDesc = async (request,response)=>{
    try{
        if((request.params.type).toLowerCase()==='asce'){

            const reviews = await Review.find().sort({updatedAt: 1})
            return response.json(reviews)

        }else if((request.params.type).toLowerCase()==='desc')
        {
            const reviews = await Review.find().sort({updatedAt: -1})
            return response.json(reviews)
        }else{
            response.status(400).send(`Bad Request : " ${request.params.type} " is an invalid request`)
        }
    }catch(error){
        return response.status(500).send(error.message)
    }
}

// const getReviewSortByAsce = async (request,response) => {

//         try{
//             const reviews = await Review.find().sort({createdAt: 1})
//             return response.json(reviews)
                
//         }catch(error){
//             return response.status(500).send(error.message)
      
//     }
   
// }


// const getReviewSortByDesc = async (request,response) => {

//     try{
//         const reviews = await Review.find().sort({createdAt: -1})
//         return response.json(reviews)
            
//     }catch(error){
//         return response.status(500).send(error.message)
  
// }

// }

module.exports = {

    getAllReview,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
    getReviewBySortTypeAsceorDesc

}
