//  all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//! this challenge does'nt work with arrow function

function uniteUnique(arr1) {
    let finalArray = [];

    for (let i = 0; i < arguments.length; i++) {
        let arrayArguments = arguments[i];

        for (let j = 0; j < arrayArguments.length; j++) {
            let indexValue = arrayArguments[j];

            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }
    return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

//? second solution using spread

// function uniteUnique(arr) {
//     var args = [...arguments];
//     var result = [];
//     for (var i = 0; i < args.length; i++) {
//         for (var j = 0; j < args[i].length; j++) {
//             if (!result.includes(args[i][j])) {
//                 result.push(args[i][j]);
//             }
//         }
//     }
//     return result;
// }

//? third solution using filter and reduce

// function uniteUnique(arr1, arr2, arr3) {
//     let newArr;
//     var args = Array.prototype.slice.call(arguments); //! Convert the arguments object into an array

//     newArr = args.reduce((arrA, arrB) => {
//         return arrA.concat(arrB.filter((i) => arrA.indexOf(i) === -1));
//     });
//     return newArr;
// }

//? fourth solution using concat and set

// function uniteUnique(...arrays) {
//     const flatArray = [].concat(...arrays);
//     return [...new Set(flatArray)];
// }

//? fifth solution shorter version of previous solution

// let uniteUnique = (...arr) => {
//     return [...new Set(arr.flat())];
// };
