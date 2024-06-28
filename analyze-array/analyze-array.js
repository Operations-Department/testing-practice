function analyzeArray(numbers) {

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = Math.floor(sum / numbers.length);

    const sortedArr = numbers.sort((a, b) => a - b);
    const min = sortedArr[0];
    const max = sortedArr[sortedArr.length - 1];
    

    return {
        average: average,
        min: min, 
        max: max, 
        length: numbers.length
    };
}

console.log(analyzeArray([1,8,3,4,2,6]));

module.exports = analyzeArray;