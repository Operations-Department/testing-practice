const calc = require('./calc');

test('addition function of calculator object', () => {
    expect(calc.add(1, 2)).toBe(3);
});

test('subtraction function of calculator object', () => {
    expect(calc.sub(5, 1)).toBe(4);
});

test('division function of calculator object', () => {
    expect(calc.div(50, 2)).toBe(25);
});

test('multiplication function of calculator object', () => {
    expect(calc.mult(10, 31)).toBe(310);
});