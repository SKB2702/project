const numberOfFilms = +prompt('Сколько вы посмотрели фильмов?', ''),
a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt('Насколько оцените фильм', ''),
c = prompt('Насколько оцените качество фильма', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    quality: []
};



personalMovieDB.movies[a] = b;
personalMovieDB.quality[a] = c;

console.log(personalMovieDB);