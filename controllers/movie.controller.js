const { response } = require('express');
const Movie = require('../models/movies.model');
const movieService = require('../services/movie.service');
const{succesResponseBody,errorResponseBody} = require('../utils/responsebody');
const createmovie = async(req,res) => {
    try{

        const  movie = await movieService.createmovie(req.body);
        succesResponseBody.data= movie;
        succesResponseBody.message = "Successfully created the movie";
        return res.status(201).json(succesResponseBody);
    } catch(err) {
        console.log(err);
        return res.status(500).json(errorResponseBody);

    }

}
const deletemovie = async (req, res) => {
    try {

        const response = await movieService.deletemovie(req.params.id);
        succesResponseBody.data = response;
        succesResponseBody.message = "Successfully deleted the movie";
        return res.status(200).json(succesResponseBody);

    } catch (err) {
        console.log(err);

        return res.status(500).json(errorResponseBody);
    }
};
const getMovie = async(req,res) => {
    try{
        const response = await movieService.getMovieById(req.params.id);
        if (response.err){
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);

        }
        succesResponseBody.data = response;
        return res.status(200).json(succesResponseBody);

    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponseBody);

    }
}
module.exports = {
    createmovie,
    deletemovie,
    getMovie
}