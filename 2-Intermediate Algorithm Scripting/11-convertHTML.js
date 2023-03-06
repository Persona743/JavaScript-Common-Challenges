// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

let convertHTML = (str) => {
    let temp = str.split('');

    for (let i in temp) {
        switch (temp[i]) {
            case '<':
                temp[i] = '&lt;';
                break;
            case '>':
                temp[i] = '&gt;';
                break;
            case '&':
                temp[i] = '&amp;';
                break;
            case '"':
                temp[i] = '&quot;';
                break;
            case "'":
                temp[i] = '&apos;';
                break;
        }
    }

    temp = temp.join('');
    return temp;
};

console.log(convertHTML('Dolce & Gabbana'));
console.log(convertHTML('Hamburgers < Pizza < Tacos'));
console.log(convertHTML('Sixty > twelve'));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML('<>'));

//? second solution using regex

// let convertHTML = (str) => {
//     const htmlEntities = {
//         '&': '&amp;',
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         "'": '&apos;',
//     };

//     return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
// };

// third solution using map

// let convertHTML = (str) => {
//     const htmlEntities = {
//         '&': '&amp;',
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         "'": '&apos;',
//     };

//     return str
//         .split('')
//         .map((entity) => htmlEntities[entity] || entity)
//         .join('');
// };
