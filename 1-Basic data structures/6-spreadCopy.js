// copy with spread ...

let thisArr = [true, true, undefined, false, null];
let thatArr = [...thisArr, 4];
// let thatArr = thisArr.splice(5, 0, 4);  --> or instead we can use splice and return thisArr
console.log(thatArr);

// in this example we have a function that takes arr and num and we want to copy it two times

let copyMachine = (arr, num) => {
    let newArr = [];
    for (; num >= 1; num--) {
        newArr.push([...arr]);
    }
    return newArr;
};
console.log(copyMachine([true, false, true], 2));
