import { apiUrl } from "/JS/constants.js";

export async function getMovie(id) {
    const response = await fetch(apiUrl + id);
    const movies = await response.json();
    return movies;
}

export async function moviePage() {
    const url = new URL(location.href);
    const id = url.searchParams.get(id);

    const movie = await getMovie(id);
    console.log(movie);
}
