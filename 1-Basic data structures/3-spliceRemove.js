// removing items with splice()

let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2); //remove two elements starts with index 2
console.log(array);

// with splice we can also return the removed values

let array2 = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array2.splice(3, 2);
console.log(newArray);
