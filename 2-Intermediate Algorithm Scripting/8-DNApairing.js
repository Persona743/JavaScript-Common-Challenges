// The DNA strand is missing the pairing element.For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// C always pair with G and T always pair with A. CG & GC & TA & AT

let pairElement = (str) => {
    let newStr = [];

    let search = function (char) {
        switch (char) {
            case 'A':
                newStr.push(['A', 'T']);
                break;
            case 'T':
                newStr.push(['T', 'A']);
                break;
            case 'C':
                newStr.push(['C', 'G']);
                break;
            case 'G':
                newStr.push(['G', 'C']);
                break;
        }
    };

    for (let i = 0; i < str.length; i++) {
        search(str[i]);
    }

    return newStr;
};

console.log(pairElement('GCG'));
console.log(pairElement('TTGAG'));
console.log(pairElement('CTCTA'));

//? second solution using map

// let pairElement = (str) => {
//     let newStr = {
//         A: ['A', 'T'],
//         T: ['T', 'A'],
//         C: ['C', 'G'],
//         G: ['G', 'C'],
//     };

//     return str.split('').map((elem) => newStr[elem]);
// };
