const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
 const result = movies.map(movie => movie.director)
 return result
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
 const result = movies.filter(movie => movie.director === director)
 return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesFromDirector = getMoviesFromDirector(movies, director)
  const averageScore = moviesFromDirector.reduce((average, movie) => average += movie.score, 0)
  return Number((averageScore / moviesFromDirector.length).toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const title = movies.map((movie) => movie.title)
  const alphabetOrder = title.sort()
  const top20 = alphabetOrder.slice(0, 20)
  return top20
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
 const moviesCopy = [...movies]
 const result = moviesCopy.sort((a,z) => {
  if (a.year > z.year) { 
    return 1;
  }
  if (a.year < z.year) { 
    return -1;
  }
  if (a.title < z.title) { 
    return -1;
  }
  if (a.title > z.title) {
    return 1;
  }
  return 0;
})
return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
 const filterByGenre = movies.filter((movie) => movie.genre.includes(genre) && movie.score !== '')     
 const averageByGenre = filterByGenre.reduce((average, movie) => average += movie.score, 0)
 return  Number((averageByGenre / filterByGenre.length).toFixed(2))
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const minutesDuration = movies.map(movie => {
    const filmDuration = movie.duration
    const hoursToMinutes = filmDuration.includes('h') ? parseInt(filmDuration) * 60 : parseInt(filmDuration)
    const durationToMinutes = hoursToMinutes + (filmDuration.includes('min') ? parseInt(filmDuration.split(' ')[1]) : 0)
    return {
      ...movie,
      duration: durationToMinutes
    }
  })
  return minutesDuration
}
// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const searchYear = movies.filter(movie => movie.year === year)
  const searchHighestRating = searchYear.sort((a, b) => b.score - a.score)[0]
  return [searchHighestRating]
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
