let convertToRoman = (num) => {
    let lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let roman = '';

    // for (let i in lookup) {
    //     while (num >= lookup[i]) {
    //         roman += i;
    //         num -= lookup[i];
    //     }
    // }
    // return roman;

    //? second solution
    for (let i of Object.keys(lookup)) {
        let s = Math.floor(num / lookup[i]);
        num -= s * lookup[i];
        roman += i.repeat(s);
    }
    return roman;
};

console.log(convertToRoman(2));
console.log(convertToRoman(7));
console.log(convertToRoman(36));
console.log(convertToRoman(3634));
