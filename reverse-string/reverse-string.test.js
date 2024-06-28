const reverseString = require('./reverse-string');

test('reverse a string', () => {
    expect(reverseString('milk')).toMatch('klim');
});