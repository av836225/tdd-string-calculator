const add = require('../string_calculator');

//1. case to check if the calculator is a function
test('string calcuator is a function', () => {
    expect(typeof add).toEqual('function');
});

//2. case to check if the calculator returns 0 when an empty string is passed
test('string calcuator is a function returns 0 when an empty string is passed', () => {
    expect(add('')).toEqual(0);
});

//3. case to check if the calculator returns the number when a single number is passed
test('string calcuator is a function returns the number when a single number is passed', () => {
    expect(add('1')).toEqual(1);
});







