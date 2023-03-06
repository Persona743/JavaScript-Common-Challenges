//! these are validate numbers in US
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

let telephoneCheck = (str) => {
    let regex = /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/gm;

    return regex.test(str);
};

console.log(telephoneCheck('555-555-5555')); //true
console.log(telephoneCheck('1(555)555-5555')); //true
console.log(telephoneCheck('555-5555')); //false
