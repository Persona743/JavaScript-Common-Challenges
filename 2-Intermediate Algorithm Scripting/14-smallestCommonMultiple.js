//! pay attention to the range. e.g--> [1,5]it means [1,2,3,4,5]
let smallestCommons = (arr) => {
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisor = max - min + 1;

    let upperBond = 1;
    for (let i = min; i <= max; i++) {
        upperBond *= i;
    }

    for (let multiple = max; multiple <= upperBond; multiple += max) {
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisor) {
            return multiple;
        }
    }
};

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));

//? second solution
// let smallestCommons = (arr) => {
//     const [min, max] = arr.sort((a, b) => a - b);
//     const range = Array(max - min + 1)
//         .fill(0)
//         .map((_, i) => i + min);

//     const upperBond = range.reduce((prod, curr) => prod * curr);

//     for (let multiple = max; multiple <= upperBond; multiple += max) {
//         const divisible = range.every((value) => multiple % value === 0);
//         if (divisible) {
//             return multiple;
//         }
//     }
// };

//? third solution using formula
// let smallestCommons = (arr) => {
//     const [min, max] = arr.sort((a, b) => a - b);
//     const range = Array(max - min + 1)
//         .fill(0)
//         .map((_, i) => i + min);

//     const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

//     const lcm = (a, b) => (a * b) / gcd(a, b);

//     return range.reduce((multiple, curr) => lcm(multiple, curr));
// };
