const { response } = require('express');
const  { Movie }  = require('../models');

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
        return response.status(404).send('Movie with the specified ID does not exisit')
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

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
    getMoviesBySortNeworOld
}