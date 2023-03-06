let binaryAgent = (str) => {
    let biString = str.split(' ');
    let uniString = [];

    for (let i in biString) {
        uniString.push(String.fromCharCode(parseInt(biString[i], 2))); //second value(number 2) is for specify the language
    }

    return uniString.join('');
};

//? second solution shorter version of previous solution using map and spread

// let binaryAgent = (str) => {
//     return String.fromCharCode(
//         ...str.split(' ').map((char) => parseInt(char, 2))
//     );
// };

//? third solution even shorter with regex

// let binaryAgent = (str) => {
//     return str.replace(/\d+./g, (char) => String.fromCharCode(`0b${char}`)); //or we can simply use parseInt(char,2) instead of (`0b${char}`)
// };

console.log(
    binaryAgent(
        '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
    )
); // return=== Aren't bonfires fun!?
