function greaterThanThen(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(greaterThanThen([2, 12, 14, 60, 3, 9]));
