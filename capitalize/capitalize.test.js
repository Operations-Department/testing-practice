const cap = require('./capitalize');

test('capital first letter', () => {
    expect(cap('milk')).toMatch('Milk');
});