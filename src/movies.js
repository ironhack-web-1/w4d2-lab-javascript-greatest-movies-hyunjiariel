// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray
    .filter((movie) => movie.director === "Steven Spielberg") //inside the parameter: true or false
    .filter((movie) => movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const sum = moviesArray

    .filter((movie) => movie.score !== undefined) // filter=true or false
    //return movie.score !== undefined

    .reduce((accumulator, movie) => accumulator + movie.score, 0);

  //const sum = movieArray.reduce((accumulado, movie) => accumulado + movie.score, 0);
  // media = (suma) / (num. elemntos)
  //let average = null;

  // const sum = moveiwsArray.reduce((accumulado, movie) => accumulado + movie.score, 0);
  //const sum = moviesArray.reduc(function(accumulado, movie) {
  //console.log("ACCUMULADO: " + accumulado)
  //console.log("VALOR ACTUAL: " + movie)
  //return accumulado + movie.score
  //}

  const average = sum / moviesArray.length;

  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sum = moviesArray

  .filter((movie) => movie.genre.includes("Drama").score !== undefined) // filter=true or false
    //return movie.score !== undefined

    .reduce((accumulado, movie) => accumulado + movie.score, 0);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.map((movie) => movie.year);
   year.sort()
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
