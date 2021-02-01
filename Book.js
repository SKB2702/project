const numberOfFilms = +prompt('Сколько вы посмотрели фильмов?', '');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt('Насколько оцените фильм', '');
if (a != null && b != null && a != '' && b != '' && a.length < 50) {
personalMovieDB.movies[a] = b;
console.log('done');
} else {
    console.log('error');
    i--;
}

};
if (personalMovieDB.count < 10) {
    console.log('Мало фильмов');
} else if (personalMovieDB.count > 30) {
    console.log('Киноман');
} else {
    console.log('Classical viewer');
}
console.log(personalMovieDB);
