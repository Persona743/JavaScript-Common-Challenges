// function addTogether() {
//     const [first, second] = arguments;

//     if(typeof(first)!=='number'){
//         return undefined
//     }

//     else if(second===undefined){
//         function addSecond(second){
//             if(typeof(second)!=='number'){
//                 return undefined
//             }

//             else{
//                 return first+second
//             }
//         }
//         return addSecond
//     }

//     else if(typeof(second)!=='number'){
//         return undefined
//     }

//     else{
//         return first+second
//     }
// };

//? second solution

function addTogether() {
    const [first, second] = arguments;

    if (typeof first !== 'number') return undefined;
    if (second === undefined) return (second) => addTogether(first, second);
    if (typeof second !== 'number') return undefined;

    return first + second;
}

console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether(2, '3'));
