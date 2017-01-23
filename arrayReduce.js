function reduceInputWords(allWords, word) {
    if (word in allWords) {
        allWords[word]++;
    }
    else {
        allWords[word] = 1;
    }
    return allWords;
}

function countWords(inputWords) {
    var frequencyOfWords = {};
    frequencyOfWords = inputWords.reduce(reduceInputWords, {});
    return frequencyOfWords;
}

module.exports = countWords