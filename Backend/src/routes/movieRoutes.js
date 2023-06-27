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

// In film production, the "cast" refers to the actors who appear on screen and portray the characters, while the "crew" includes all the behind-the-scenes personnel involved in the technical and creative aspects of the production.