function doubleAll(numbers) {
    var result = [];
    function toMultiply(numberToMultiply) {
        return numberToMultiply * 2;
    }
    return result = numbers.map(toMultiply);
}

module.exports = doubleAll





