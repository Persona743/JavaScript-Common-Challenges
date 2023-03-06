let sumAll = (arr) => {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;

    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
};

console.log(sumAll([1, 6]));

//? second solution using Arithmetic formula

// let sumAll = (arr) => {
//     const startNum = arr[0];
//     const endNum = arr[1];

//     const numCount = Math.abs(startNum - endNum) + 1;
//     const sum = ((startNum + endNum) * numCount) / 2;
//     return sum;
// };

//?third solution using spread

// let sumAll = (arr) => {
//     let sumBetween = 0;
//     // Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements
//     for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//         sumBetween += i;
//     }
//     return sumBetween;
// };

//? fourth solution

// let sumAll = (arr) => {
//     const [first, last] = [...arr].sort((a, b) => a - b);
//     return first !== last ? first + sumAll([first + 1, last]) : first;
// };

//? fifth solution using reduce

// let sumAll = (arr) => {
//     let newArr = [];
//     let sum = 0;
//     let reducer = (accumulator, current) => accumulator + current;
//     arr.sort((a, b) => a - b);

//     for (let i = arr[0]; i <= arr[1]; i++) {
//         newArr.push(i);
//     }
//     sum = newArr.reduce(reducer);
//     return sum;
// };