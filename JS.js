"use strict";

function learnJS(logg, callback, brave) {
    console.log(`I study ${logg}`);
    callback();
    brave();
}

function done() {
    console.log('Passed');
}

function grey() {
    console.log('Yes');
}

learnJS('JavaScript', done, grey);