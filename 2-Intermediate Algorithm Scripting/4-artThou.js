// return first array(collection) which includes the second one(source)

// let whatIsInAName = (collection, source) => {
//     let srcKey = Object.keys(source);

//     return collection.filter((obj) => {
//         for (let i = 0; i < srcKey.length; i++) {
//             if (
//                 !obj.hasOwnProperty(srcKey[i]) ||
//                 obj[srcKey[i]] !== source[srcKey[i]]
//             ) {
//                 return false;
//             }
//         }
//         return true;
//     });
// };



//? second solution using every

let whatIsInAName = (collection, source) => {
    let srckey = Object.keys(source);

    return collection.filter((obj) => {
        return srckey.every((key) => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
};

//? third solution using map

// let whatIsInAName = (collection, source) => {
//     let srcKey = Object.keys(source);

//     return collection.filter((obj) => {
//         return srcKey
//             .map((key) => {
//                 return obj.hasOwnProperty(key) && obj[key] === source[key];
//             })
//             .reduce((a, b) => a && b);
//     });
// };

console.log(
    whatIsInAName(
        [
            { first: 'Romeo', last: 'Montague' },
            { first: 'Mercutio', last: null },
            { first: 'Tybalt', last: 'Capulet' },
        ],
        { last: 'Capulet' }
    )
);