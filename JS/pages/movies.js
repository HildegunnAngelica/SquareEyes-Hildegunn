import { apiUrl } from "/JS/constants.js";

export async function getMovies() {
    const response = await fetch(apiUrl);
    const movies = await response.json();
    return movies;
}

export function renderMovie(movieData) {
     const movieElement = document.createElement("div");
     movieElement.href = "/JS/pages/movie.js";

    movieElement.innerText = movieData.title;
    document.body.append(movieElement)

}

export function renderMovies(listOfMovies) {
    listOfMovies.forEach(renderMovie)
}

export async function moviesPage() {
    const movies = await getMovies();
    renderMovies(movies);
    console.log(movies);
}

moviesPage();