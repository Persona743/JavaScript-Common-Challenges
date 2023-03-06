let nestedArray = [
    ['deep'],
    [['deeper'], ['deeper']],
    [[['deepest'], ['deepest']], [[['deepest-est?']]]],
]; //deepest is level 4 and deepest-est? is level 5

nestedArray[2][1][0][0][0] = 'deeper still'; //replace deepest-est?

console.log(nestedArray[2][1][0][0][0]);
