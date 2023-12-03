

const url = "https://api.noroff.dev/api/v1/square-eyes";

async function getMovies() {

    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

}

getMovies();
