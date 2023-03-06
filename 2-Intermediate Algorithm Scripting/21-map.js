function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let a = 2 * Math.PI;
    let newArr = [];

    let getOrbPeriod = function (obj) {
        let c = Math.pow(earthRadius + obj.avgAlt, 3);
        let b = Math.sqrt(c / GM);
        let orbPeriod = Math.round(a * b);
        return { name: obj.name, orbitalPeriod: orbPeriod };
    };

    for (let i in arr) {
        newArr.push(getOrbPeriod(arr[i]));
    }

    return newArr;
}

//? second solution

// const GM = 398600.4418;
// const earthRadius = 6367.4447;
// return arr.map(({ name, avgAlt }) => {
//     const earth = earthRadius + avgAlt;
//     const orbitalPeriod = Math.round(
//         2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM)
//     );
//     return { name, orbitalPeriod };
// });

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
