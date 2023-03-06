let palindrome = (str) => {
    let tempStr = str
        .match(/[a-z0-9]+/gi)
        .join('')
        .toLowerCase();
    let newStr = tempStr.split('').reverse().join('');

    return newStr === tempStr;
};

console.log(palindrome('eye'));
console.log(palindrome('A man, a plan, a canal. Panama'));
console.log(palindrome('almostomla'));
console.log(palindrome('0_0 (: /- :) 0-0'));
console.log(palindrome('nope'));
