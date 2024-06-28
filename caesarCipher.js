function caesarCipher(string, num) {
    let charCodesArr = [];

    //iterates through the string
    for (let char of string) {
        let charCode = char.charCodeAt(0);
        
        //converts only letters into char codes (a-z && A-Z)
        if (charCode <= 122 && charCode >= 97 || charCode >= 65 && charCode <= 90) charCodesArr.push(charCode);

        //maintains punctuation  
        else charCodesArr.push(char);
    }

    let shiftedStringArr = [];

    //iterates through the array of charcodes and punctuation
    for (let digit of charCodesArr) {

        //maintains punctuation
        if (typeof digit !== 'number') {
            shiftedStringArr.push(digit);
            continue;
        }

        //add the 'shift' number - maintains upper/lower case
        else {
            for (let i = 0; i < num; i++) {
                if (digit === 122) digit = 96;
                else if (digit === 90) digit = 64;
                digit++;
            }

            shiftedStringArr.push(digit);
        }
    }

    //iterates through 'shifted' char codes
    for (let i = 0; i < shiftedStringArr.length; i++) {

        //maintains punctuation
        if (typeof shiftedStringArr[i] !== 'number') continue;

        //converts back to letters
        shiftedStringArr[i] = String.fromCharCode(shiftedStringArr[i]);
    }

    return shiftedStringArr.join('');
}

module.exports = caesarCipher;