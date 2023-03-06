// Given the array arr, iterate through and remove each element starting from the first element
// (the 0 index) until the function func returns true when the iterated element is passed through it.

let dropElements =(arr,func)=>{
    while(arr.length>0&&!func(arr[0])){
        arr.shift()
    }
    return arr
}

//? second solution using slice
// let dropElements = (arr,func)=>{
//     let sliceIndex=arr.findIndex(func)
//     return arr.slice(sliceIndex>=0 ? sliceIndex : arr.length)
// }

//? third solution
// let dropElements =(arr,func)=>{
//     let originalLen=arr.length
//     for(let i =0;i< originalLen;i++){
//         if(func(arr[0])){
//             break
//         }else{
//             arr.shift()
//         }
//     }
//     return arr
// }

//? fourth solution
// let dropElements = (arr, func, i = 0) => {
//     return i < arr.length && !func(arr[i])
//         ? dropElements(arr.slice(i + 1), func, i)
//         : arr;
// };

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
