const personalMovieDB = {
    count: 0,
    movies: {},
    privat: false,
    genres: [],
    start: function() {
        personalMovieDB.count = +prompt('How many films did you watch?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films did you watch?');
        }
    },
    rememberMyFilms: function() {
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
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Мало фильмов');
        } else if (personalMovieDB.count > 30) {
            console.log('Киноман');
        } else {
            console.log('Classical viewer');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("Error");
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre != null || genre != '') {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - ${item}`);
            });
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
};


 

 
 

