let simpleArr = ['sia', 27, 'persoan7', undefined, true, null];
console.log(simpleArr.length);

let complexArr = [
    [
        { one: 1, two: 2 },
        { three: 3, four: 4 },
    ],
    [
        { a: 'a', b: 'b' },
        { c: 'c', d: 'd' },
    ],
];
console.log(complexArr.length);

let myArray = ['a', 'b', 'c'];
let myVariable = myArray[0]; //return a
myArray[1] = 'not b anymore';
console.log(myArray);
