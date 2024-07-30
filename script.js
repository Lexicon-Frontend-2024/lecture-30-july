console.log('Hello world!');

renderPokemons();

async function renderPokemons() {
    let pokemons = await fetchPokemons(); 
    pokemons.forEach(pokemon => {
        console.log(pokemon)
        document.body.innerHTML += `${pokemon.name} <br>`;
    });
}

async function fetchPokemons() {
    // try {
    //     let response = await fetch('https://santosnr6.github.io/Data/pokemons.json');
    //     let data = await response.json();
    //     return data;
    // } catch(error) {
    //     console.log(error);
    // }

    let pokemons = [];
    await fetch('https://santosnr6.github.io/Data/pokemons.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(pokemon => {
                pokemons.push(pokemon);
            });
        });
    return pokemons;
}




// Från förmiddagens genomgång

// fetchMovies();

async function fetchMovies() {

    // Det nyare fetch-anropet
    try {
        let response = await fetch('https://santosnr6.github.io/Data/movies.json');
        let data = await response.json();
        console.log(data);

        data.forEach(movie => {
            document.body.innerHTML += `${movie.title} - ${movie.imdbid} <br>`;
        });
        return data;
    } catch(error) {
        console.log(error);
    }

    // Gamla fetch-metoden - funkar alldeles finfint!
    // fetch('https://santosnr6.github.io/Data/movies.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         data.forEach(movie => {
    //             document.body.innerHTML += `${movie.title} - ${movie.imdbid} <br>`;
    //         });
    //     })
    //     .catch(error => console.log(error));
}