function repeat(operation, numberOfTimes) {
    for (var i = 0; i < numberOfTimes; i++) {
        operation();
    }
}

module.exports = repeat