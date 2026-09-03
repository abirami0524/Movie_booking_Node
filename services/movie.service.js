const Movie = require('../models/movies.model');
const createmovie = async(data) =>{
    const movie = await Movie.create(data);
    return movie;
}
const deletemovie = async(id) =>{
    const response = await Movie.findByIdAndDelete(id);
    return response;
}

const getMovieById = async(id) => {
    const movie = await Movie.findById(id);
    console.log("found movie",movie);
    if(!movie){
        return{
            err: "No movie found for the corresponding ID provided",
            code: 404
        }
    };
    return movie;
}
module.exports = {
    createmovie,
    deletemovie,
    getMovieById
    
}