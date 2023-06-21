import { getMovies , getMoviesByCrew, getMoviesByTitle, getMoviesGenreIsAction, getMoviesGenresAvailable } from '../controllers/movieRoutesContollers.js'


const movieRoutes = (app) => {
    app.route('/movies')
    .get(getMovies)
    app.route('/movies/actor/:actors')
    .get(getMoviesByCrew)
    app.route('/movies/title/:title')
    .get(getMoviesByTitle)
    app.route('/movies/genres/available')
    .get(getMoviesGenresAvailable)
    app.route('/movies/genres/action')
    .get(getMoviesGenreIsAction)
}


export default movieRoutes;