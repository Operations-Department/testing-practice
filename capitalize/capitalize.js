function cap(string) {
    return string[0].toUpperCase() + string.slice(1);
};

console.log(cap('milk'));

module.exports = cap;