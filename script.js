console.log('Hello world!');

fetchMovies();

async function fetchMovies() {

    // try {
    //     let response = await fetch('https://santosnr6.github.io/Data/movies.json');
    //     let data = await response.json();
    //     console.log(data);

    //     data.forEach(movie => {
    //         document.body.innerHTML += `${movie.title} - ${movie.imdbid} <br>`;
    //     });
    // } catch(error) {
    //     console.log(error);
    // }

    // Gamla fetch-metoden - funkar alldeles finfint!
    fetch('https://santosnr6.github.io/Data/movies.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                document.body.innerHTML += `${movie.title} - ${movie.imdbid} <br>`;
            });
        })
        .catch(error => console.log(error));
}