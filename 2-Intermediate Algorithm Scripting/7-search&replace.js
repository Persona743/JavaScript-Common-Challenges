// replace the first word with the second one

// let myReplace = (str, before, after) => {
//     let index = str.indexOf(before);

//     if (str[index] === str[index].toUpperCase()) {
//         after = after.charAt(0).toUpperCase() + after.slice(1);
//     } else {
//         after = after.charAt(0).toLowerCase() + before.slice(1);
//     }
//     str = str.replace(before, after);
//     return str;
// };

// console.log(
//     myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
// );
// console.log(myReplace('His name is Tom', 'Tom', 'john'));
// console.log(
//     myReplace('Let us get back to more Coding', 'Coding', 'algorithms')
// );

//? second solution using regex. we can use after.substring(1) instead of after.slice(1)

let myReplace = (str, before, after) => {
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.slice(1);
    } else {
        after = after[0].toLowerCase() + after.slice(1);
    }

    return str.replace(before, after);
};

//? third solution using map

// let myReplace = (str, before, after) => {
//     const myStr = str.split(' ');
//     const [wordToReplace] = myStr.filter((item) => item === before);
//     return wordToReplace[0].toUpperCase() !== wordToReplace[0]
//         ? myStr.map((item) => (item === before ? after : item)).join(' ')
//         : myStr
//               .map((item) =>
//                   item === before
//                       ? after[0].toUpperCase() + after.slice(1)
//                       : item
//               )
//               .join(' ');
// };

console.log(
    myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
);
console.log(myReplace('His name is Tom', 'Tom', 'john'));
console.log(
    myReplace('Let us get back to more Coding', 'Coding', 'algorithms')
);
