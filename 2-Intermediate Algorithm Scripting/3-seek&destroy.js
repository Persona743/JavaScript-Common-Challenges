//! only the third solution working right

// let destroyer = (arr) => {
//     let valsToRemove = Object.values(arguments).slice(1);

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < valsToRemove.length; j++) {
//             if (arr[i] === valsToRemove[j]) {
//                 delete arr[i];
//             }
//         }
//     }
//     return arr.filter((item) => item !== null);
// };

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//? second solution

// let destroyer = (arr) => {
//     let valsToRemove = Array.from(arguments).slice(1);
//     return arr.filter((val) => !valsToRemove.includes(val));
// };

//? third solution

let destroyer = (arr, ...valsToRemove) => {
    return arr.filter((elem) => !valsToRemove.includes(elem));
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(['tree', 'hamburger', 53], 'tree', 53));
