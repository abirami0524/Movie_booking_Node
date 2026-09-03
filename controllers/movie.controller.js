const Movie = require('../models/movies.model');
const movieService = require('../services/movie.service');
const errorResponseBody = {
    err: {},
    data: {},
    message:"Something went wrong, cannot process request",
    success: false
}
const succesResponseBody= {
    err: {},
    data: {},
    message:"Successfully processed",
    success: true 
}
const createmovie = async(req,res) => {
    try{

        const  movie = await Movie.create(req.body);
        return res.status(201).json({
            success: true,
            error: {},
            data: movie,
            message : "successfully created a movie",
        })
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            success: true,
            error: err,
            data: {},
            message : "something went wrong",          
        });

    }

}
const deletemovie = async (req, res) => {
    try {

        const movie = await Movie.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            success: true,
            error: {},
            data: movie,
            message: "Successfully deleted movie"
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            success: false,
            error: err,
            data: {},
            message: "Something went wrong, cannot delete movie",
        });
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