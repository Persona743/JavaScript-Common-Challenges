let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

console.log(fruits.indexOf('dates')); //return -1 cuz this one does not exist
console.log(fruits.indexOf('oranges'));
console.log(fruits.indexOf('pears'));

// another example

let quickCheck = (arr, elem) => {
    return arr.indexOf(elem) >= 0 ? true : false;
};

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
