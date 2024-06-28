const caesarCipher = require('./caesarCipher');

test('Caesar cipher', () => {
    expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!')
});