const Movie = require('../models/movies.model');

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
    getMovieById
    
}