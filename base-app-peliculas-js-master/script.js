document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = '779af892138513062f9ca957173fda65'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w500'


function searchMovies() {
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}&language=es`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies) {
    let resultContainer = document.getElementById('results')
    resultContainer.innerHTML = ' '

    if(movies.length === 0){
        resultContainer.innerHTML = '<h3>No se encontraron resultados para tu búsqueda</h3>'
        return
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date
        
        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        resultContainer.appendChild(movieDiv)

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

    });
}
