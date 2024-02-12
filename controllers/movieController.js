const { response } = require('express');
const  { Movie,Actor,Review }  = require('../models');
const { json } = require('body-parser');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovieById = async (request,response) => {
    try{
        const {id} = request.params
        const movies = await Movie.findById(id)
        if(movies){
            return response.json(movies)
        }
        return response.status(404).send(`Bad Request: Movie with the ${request.params} does not exisit`)
    } catch (error){
        return response.status(500).send(error.message)
    }
}

const createMovie = async (request,response) => {
    try{
        const movie = await new Movie (request.body)
        await movie.save()
        return response.status(201).json({
            movie,
        })
    } catch (error){
        return response.status(500).json({error:error.message})
    }
}

const updateMovie = async (request,response) => {
    try{
        let {id} = request.params
        let movie = await Movie.findByIdAndUpdate(id, request.body,{new:true})
        if(movie){
            return response.status(200).json(movie)
        }
        throw new Error("Movie not found")
    }catch(error){
        return response.status(500).send(error.message)
    }
}

const deleteMovie = async (request,response) => {
    try{
        const { id }= request.params
        const deleteMovie = await Movie.findByIdAndDelete(id)
        if(deleteMovie){
            return response.status(200).send("Movie Deleted!")
        }
        throw new Error ("Movie not found")
    }
    catch(error){
        return response.status(500).send(error.message)
    }
}

const getAllActorReviewofMovie = async (request,response) => {

    try{
        const { id } = request.params
        const movieBy_id = await Movie.findById(id)
        // //console.log("Movie Id : ", movieBy_id)
        // const actorBy_movie_id = await Actor.find({movie_id:id})
        // //console.log("Actor by Movie Id : ", actorBy_movie_id)
        // const reviewBy_movie_id = await Review.find({movie_id:id})
        // //console.log("Review by Movie Id : ", reviewBy_movie_id)
        // const mergedResult = {...movieBy_id,...actorBy_movie_id,...reviewBy_movie_id}
        // //console.log(`merger Result : ${mergedResult}`)

        const movie_Details_of_Actors_n_Reviews = await Movie.findOne({
            where: {movie_id:id },
            include : [
                {
                    models: Actor,
                    as: 'actors'
                },
                {
                    models: Review,
                    as: 'reviews',
                },
            ],
        })

        if(!movieBy_id){
            return response.status(404).send({ error: 'Movie details not found'})
        }
        return response.json(movie_Details_of_Actors_n_Reviews) 
        console.log(" REsuoltttttttt : ",json(movie_Details_of_Actors_n_Reviews))
    }
    catch(error)
    {
        return response.status(500).send(error.message)
    }

}

//Bonus I
//AAU I want to sort my movies by newest or oldest
const getMoviesBySortNeworOld = async (request,response) => {
    try{
        if((request.params.type).toLowerCase()==='old'){

            const movies = await Movie.find().sort({year_release: 1})
            return response.json(movies)

        }else if((request.params.type).toLowerCase()==='new')
        {
            const movies = await Movie.find().sort({year_release: -1})
            return response.json(movies)
        }else{
            response.status(400).send(`Bad Request : " ${request.params.type} " is an invalid request`)
        }
    }catch(error){
        return response.status(500).send(error.message)
    }
}

//Get Movie by title
const getMovieByTitle = async (request,response) => {
    try{
        const req_title = request.params
        const moviesBy_title = await Movie.find({title: {$regex: new RegExp(req_title.title,'i')}}) 
        if(moviesBy_title){
            return response.json(moviesBy_title)
        }else{
            return response.status(404).send(` There is no movies under ${request.params} name`)
        }
    }catch(error){
        return response.status(500).send(error.message)
    }
}

//Get Movie by year
const getMovieByYear = async (request,response) => {
    try{
        const req_movie_year = request.params.year
        const moviesBy_year = await Movie.find({
            $expr: {
                $eq: [
                    { $year: "$year_release" }, 
                    req_movie_year
                ]
            }
        }) 
        if(moviesBy_year){
            response.json(moviesBy_year)
        }else{
            response.status(404).send(` There is no movies found released on ${request.params} year `)
        }
    }catch(error){
        return response.status(500).send(error.message)
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
    getMoviesBySortNeworOld,
    getAllActorReviewofMovie,
    getMovieByTitle,
    getMovieByYear
}