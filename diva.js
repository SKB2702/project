"use strict";
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('How many films did you watch?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you watch?');
    }
}
start();