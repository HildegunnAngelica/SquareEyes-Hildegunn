import { moviesPage } from "./pages/movies.js";
import { moviePage } from "./pages/movie.js";
// import * as events from ""

console.log(location.pathname);

if (location.pathname === "/movies/") {
    moviesPage()
}

if (location.pathname === "/movie/") {
    moviePage()
}