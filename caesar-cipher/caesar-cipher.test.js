const caesarCipher = require('./caesar-cipher');

test('Caesar cipher', () => {
    expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!')
});