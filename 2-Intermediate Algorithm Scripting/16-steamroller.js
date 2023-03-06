let steamrollArray = (arr) => {
    const flattenedArray = [];

    for (let i in arr) {
        if (Array.isArray(arr[i])) {
            flattenedArray.push(...steamrollArray(arr[i]));
        } else {
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
};

//? second solution using concat
// let steamrollArray = (arr) => {
//     const flat = [].concat(...arr);
//     return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// };

//? third solution
// let steamrollArray = (arr) => {
//     return arr
//         .toString()
//         .replace(',,', ',') //"1,2,,3" => "1,2,3"
//         .split(',') //['1','2','3']
//         .map(function (v) {
//             if (v == '[object Object]') {
//                 return {};
//             } else if (isNaN(v)) {
//                 return v;
//             } else {
//                 return parseInt(v);
//             }
//         });
// };

//? fourth solution
// let steamrollArray = (val, flatArr = []) => {
//     val.forEach((item) => {
//         if (Array.isArray(item)) steamrollArray(item, flatArr);
//         else flatArr.push(item);
//     });
//     return flatArr;
// };

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[['a']], [['b']]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
