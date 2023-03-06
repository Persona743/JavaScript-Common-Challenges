function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

//pop() & shift() have opposite functions

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped]; //we return the removed arrays, so in console we'll see them
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
