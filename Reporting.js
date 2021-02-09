function copy(mainObj) {
    let ObjCopy = {};
    let  key;
    for (key in mainObj) {
        ObjCopy[key] = mainObj[key];
    }
    return ObjCopy;
}

const str = {
    a: 5,
    b: 6,
    c: 7,
    d: {
        e: 8,
        f: 9,
    },
};

let progress = copy(str);
progress.d.e = 10;
console.log(progress);

const add = {
    x: 2,
    y: 3,
};
const q = {...add};
console.log(q);
console.log(Object.assign(progress, add));