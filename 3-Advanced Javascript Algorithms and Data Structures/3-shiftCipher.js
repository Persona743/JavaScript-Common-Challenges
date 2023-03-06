// cipher is a code and secret way of writing and has a lot of ways to do so; one of the
// most common and famous one is ROT13 which letters are shifted by 13 (a->n)
let rot13 = (str) => {
    let newStr = str.split('');

    for (let i in newStr) {
        let code = newStr[i].charCodeAt(0);
        newStr[i] =
            code < 65 || code > 90
                ? newStr[i]
                : code >= 78 && code <= 90
                ? String.fromCharCode(code - 13)
                : String.fromCharCode(code + 13);
    }
    return newStr.join('');
};

console.log(rot13('SERR PBQR PNZC')); // return FREE CODE CAMP
console.log(rot13('YVIRECBBY')); // return LIVERPOOL
console.log(rot13('SERR CVMMN!')); // return FREE PIZZA!
