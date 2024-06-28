const cap = require('./capital');

test('capital first letter', () => {
    expect(cap('milk')).toMatch('Milk');
});