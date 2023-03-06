// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

let spinalCase = (str) => {
    let regex = /\s+|_+/g;
    str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.replace(regex, '-').toLowerCase();

    //? second solution
    // str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    // return str
    //     .toLowerCase()
    //     .split(/(?:_| )+/)
    //     .join('-');
};

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('AllThe-small Things'));
