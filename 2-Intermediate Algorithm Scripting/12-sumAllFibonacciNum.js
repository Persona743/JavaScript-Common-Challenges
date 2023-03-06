// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

let sumFibs = (num) => {
    let prevNum = 0;
    let currNum = 1;
    let result = 0;
    for (let i = 0; currNum <= num; i++) {
        if (currNum % 2 !== 0) {
            result += currNum;
        }
        currNum += prevNum;
        prevNum = currNum - prevNum;
    }
    return result;
};

console.log(sumFibs(4));
console.log(sumFibs(1000));
console.log(sumFibs(10));

//? second solution using filter and reduce

// let sumFibs = (num) => {
//     if (num <= 0) return 0;

//     const arrFib = [1, 1];
//     let nexFib = 0;

//     while ((nexFib = arrFib[0] + arrFib[1]) <= num) {
//         arrFib.unshift(nexFib);
//     }

//     return arrFib.filter((x) => x % 2 !== 0).reduce((a, b) => a + b);
// };
