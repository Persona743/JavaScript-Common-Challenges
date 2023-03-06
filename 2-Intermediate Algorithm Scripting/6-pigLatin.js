// pig latin rules:
// - If a word begins with a consonant(not vowl), take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// -should handle word without vowls. e.g last console

let translatePigLatin = (str) => {
    let regex = /^[^aieou]+/i;
    let consonant = str.match(regex);
    return consonant !== null
        ? str.replace(regex, '').concat(consonant).concat('ay')
        : str.concat('way');
};

console.log(translatePigLatin('consonant')); // return onsonantaay
console.log(translatePigLatin('california')); //return aliforniacay
console.log(translatePigLatin('paragraphs')); // return aragraphspay
console.log(translatePigLatin('algorithm')); // return algorithmway
console.log(translatePigLatin('rhythm')); // return rhythmay

//? second solution with substr

// let translatePigLatin = (str) => {
//     let pigLatin = '';
//     let regex = /[aioue]/gi;

//     if (str[0].match(regex)) {
//         pigLatin = str + 'way';
//     } else {
//         let vowel = str.indexOf(str.match(regex[0]));
//         pigLatin = str.substr(vowel) + str.substr(0, vowel) + 'ay';
//     }

//     return pigLatin;
// };

//? third solution shorter version of second solution

// let translatePigLatin = (str) => {
//     if (str.match(/^[aeiou]/)) return str + 'way';

//     const consonant = str.match(/^[^aeiou]+/)[0];
//     return str.substring(consonant.length) + consonant + 'ay';
// };

//? fourth solution with pure regex and replace

// let translatePigLatin = (str) => {
//     return str
//         .replace(/^[aeiou]\w*/, '$&way')
//         .replace(/(^[^aeiou]+)(\w*)/, '$2$1ay');
// };

//? fifth solution with no regex and using includes and recursive

// let translatePigLatin = (str, charPos = 0) => {
//     return ['a', 'i', 'e', 'o', 'u'].includes(str[0])
//         ? str + (charPos === 0 ? 'way' : 'ay')
//         : charPos === str.length
//         ? str + 'ay'
//         : translatePigLatin(str.slice(1) + str[0], charPos + 1);
// };
