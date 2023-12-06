

const url = "https://api.noroff.dev/api/v1/square-eyes"; 

const moviesForHtml = document.querySelector(".genre-div");


async function fetchMovies() {
    
    const response = await fetch(url);

    const results = await response.json();

    const movies = results;

    moviesForHtml.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i]);

        if (i === 4) {
            break;
        }

        moviesForHtml.innerHTML += `<img style="background-image: url('${movies[i].image}')"></img>
                                    <div class="genre-div"> ${movies[i].title} </div>
                                    <div class="indie-item" 
                                    style="background-image: url('${movies[i].image}')"> </div>
                                    `;

    }
    
}



fetchMovies();