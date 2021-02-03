let numberOfFilms;
function start() {
    numberOfFilms = +prompt('How many films did you watch?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you watch?');
    }
}
start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    privat: false,
    genres: [],
};


function rememberMyFilms() {
    for (let i = 0; i < 3; i++) {
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
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало фильмов');
    } else if (personalMovieDB.count > 30) {
        console.log('Киноман');
    } else {
        console.log('Classical viewer');
    }
}

 detectPersonalLevel();

 function showMyDB() {
     if (personalMovieDB.privat == false) {
         console.log(personalMovieDB);
     } else {
         console.log("Error");
     }
 }
 showMyDB();

 function writeYourGenres() {
     for (let i = 1; i < 4; i++) {
         const c = prompt(`Ваш любимый жанр под номером ${i}`);
         personalMovieDB.genres[i - 1] = c;
     }
 }

 writeYourGenres();