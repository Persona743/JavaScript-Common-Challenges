let truthCheck = (collection, pre) => {
    let counter = 0;

    for (let i in collection) {
        if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
            counter++;
        }
    }

    return counter == collection.length;
};

//? second solution using every

// let truthCheck = (collection, pre) => {
//     return collection.every(
//         (elem) => elem.hasOwnProperty(pre) && Boolean(elem[pre])
//     );
// };

//? third solution

// let truthCheck = (collection, pre) => {
//     return collection.every((obj) => obj[pre]);
// };

console.log(
    truthCheck(
        [
            { user: 'Tinky-Winky', sex: 'male' },
            { user: 'Dipsy', sex: 'male' },
            { user: 'Laa-Laa', sex: 'female' },
            { user: 'Po', sex: 'female' },
        ],
        'sex'
    )
); //sex exist in all collection so it true

console.log(
    truthCheck(
        [
            { user: 'Tinky-Winky', sex: 'male', age: 0 },
            { user: 'Dipsy', sex: 'male', age: 3 },
            { user: 'Laa-Laa', sex: 'female', age: 5 },
            { user: 'Po', sex: 'female', age: 4 },
        ],
        'age'
    )
); //should return false age can't be 0
