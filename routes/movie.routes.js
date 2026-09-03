const movieController = require('../controllers/movie.controller');
const movieMiddlewares = require('../middlewares/movie.middlewares');

const routes = (app) => {

    // Create movie
    app.post('/mba/api/v1/movies', movieController.createmovie);

    // Get movie by ID
    app.get('/mba/api/v1/movies/:id', movieController.getMovie);

    // Delete movie by ID
    app.delete('/mba/api/v1/movies/:id', movieController.deletemovie);

};

module.exports = routes;