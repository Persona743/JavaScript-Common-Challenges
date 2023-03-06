// let diffArray = (arr1, arr2) => {
//     let newArr = [];

//     function onlyFirst(first, second) {
//         for (let i in first) {
//             if (second.indexOf(first[i]) === -1) {
//                 newArr.push(first[i]);
//             }
//         }
//     }

//     onlyFirst(arr1, arr2);
//     onlyFirst(arr2, arr1);

//     return newArr;
// };

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//? second solution using concat

// let diffArray = (arr1, arr2) => {
//     let newArr = [];
//     let combineArr = arr1.concat(arr2).sort();

//     for (let i = 0; i < combineArr.length; i++) {
//         if (
//             combineArr[i] !== combineArr[i + 1] &&
//             combineArr[i] !== combineArr[i - 1]
//         ) {
//             newArr.push(combineArr[i]);
//         }
//     }
//     return newArr;
// };

//? third solution using filter and includes

let diffArray = (arr1, arr2) => {
    return arr1
        .concat(arr2)
        .filter((item) => !arr1.includes(item) || !arr2.includes(item))
        .sort();
};

//? fourth solution

// let diffArray = (arr1, arr2) => {
//     return [...diff(arr1, arr2), ...diff(arr2, arr1)];

//     function diff(a, b) {
//         return a.filter((item) => b.indexOf(item) === -1);
//     }
// };

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
