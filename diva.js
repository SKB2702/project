"use strict";
const options = {
    name: 'test',
    colours: {
        border: 'black',
        bg: 'red'
    }
};
console.log(options.colours.bg);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет ${options[key]}`);
    }
}
console.log(Object.keys(options).length);
const {name} = options;
console.log(name);

const arr = [2, 3, 4, 5, 6];
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} in tha massive of ${arr}`);
});

