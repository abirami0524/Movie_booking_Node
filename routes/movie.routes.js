const MovieController = require('../controllers/movie.controller');

const routes =(app) => {
    app.post('/mba/api/v1/movies', MovieController.createmovie);
}
module.exports = routes;
