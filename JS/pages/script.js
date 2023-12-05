

const url = "https://api.noroff.dev/api/v1/square-eyes";

const moviesForHtml = document.querySelector(".container-indie");


async function fetchMovies() {
    
    const response = await fetch(url);

    const results = await response.json();

    const movies = results;
    moviesForHtml.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i]);

        moviesForHtml.innerHTML += `<div class="container-indie"> ${movies[0].title} </div>`;
    }
    
}



fetchMovies();