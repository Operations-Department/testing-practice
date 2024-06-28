const calc = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    div: (a, b) => a / b,
    mult: (a, b) => a * b
};

console.log(calc.add(8, 3));
console.log(calc.sub(8, 3));
console.log(calc.div(8, 4));
console.log(calc.mult(8, 3));

module.exports = calc;