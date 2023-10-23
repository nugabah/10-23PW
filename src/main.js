const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzhiMWUyMzI3Y2Y3MzIwM2Q1MjFiYWQ0ZjliOGEyNCIsInN1YiI6IjY1MmYyYmZiYTgwMjM2MDEzNzY4OGY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7k1D3Wx9yExLdJ6aCCgYsBR7rZsnjXCZQLZNwC8rNGg'
  }
};

const movieList = document.getElementById("card-list");

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    movies.forEach(m => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';
      movieCard.onclick = function () {
        alert(m.id);
      };
      movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300${m.poster_path}" alt="${m.title} 포스터" id="${m.id}" class="movie-image">
        <h2 class="title">${m.title}</h2>
        <p>평점: ${m.vote_average}</p>
        <p>${m.overview}</p>
      `;
      movieList.appendChild(movieCard)
    });
  }
  )
  .catch(err => console.error(err));

function filter() {
  let searchmovie = document.getElementsByClassName('movie-card');
  let search = document.getElementById('searchinput').value.toLowerCase();
  for (let i = 0; i < searchmovie.length; i++) {
    let title = searchmovie[i].getElementsByClassName("title");
    if (title[0].innerHTML.toLowerCase().indexOf(search) != -1) {
      searchmovie[i].style.display = "block"
    } else {
      searchmovie[i].style.display = "none"
    }
  }
}
