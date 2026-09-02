const mongoose = require('mongoose');
/**Define schema of movies stored in db */
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    casts: {
        type: [String],
        required: true
    },
    trailerurl: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true,
        default: 'English'
    },
    releasedate: {
        type: Date,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseStatus: {
        type: String,
        required: true,
        default: "RELEASED",
    },
    
}, {timestamps: true});

const Movie = mongoose.model('Movie',movieSchema); //create new model
module.exports = Movie; //return the model