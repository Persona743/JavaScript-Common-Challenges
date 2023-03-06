// find the missing letter in the passed letter range and return it

let fearNotLetter = (str) => {
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);

        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1); //! pay attention
        }
    }
    return undefined;
};

console.log(fearNotLetter('abce'));
console.log(fearNotLetter('stvwx'));

//? second solution

// let fearNotLetter = (str) => {
//     let currCharCode = str.charCodeAt(0);
//     let missing = undefined;

//     str.split('').forEach((letter) => {
//         if (letter.charCodeAt(0) === currCharCode) {
//             currCharCode++;
//         } else {
//             missing = String.fromCharCode(currCharCode);
//         }
//     });

//     return missing;
// };
