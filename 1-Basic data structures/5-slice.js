// copy arrya with slice()

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todayWeather = weatherConditions.slice(1, 3); //first param is the index to begin the extraction and second is to stop(ont including the index element which is "hail")
console.log(todayWeather);

// another example

function forecast(arr) {
    let newArr = arr.slice(2, 5);
    return newArr;
}

console.log(
    forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])
);
