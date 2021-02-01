const numberOfFilms = +prompt('Сколько вы посмотрели фильмов?', '');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt('Насколько оцените фильм', '');
personalMovieDB.movies[a] = b;
};

console.log(personalMovieDB);
