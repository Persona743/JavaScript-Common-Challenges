// adding items with splice()

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

// another example

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond'); //remove the first two and add two strings to replace them
    return arr;
}

console.log(
    htmlColorNames([
        'DarkGoldenRod',
        'WhiteSmoke',
        'LavenderBlush',
        'PaleTurquoise',
        'FireBrick',
    ])
);
