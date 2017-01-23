function duckCount() {
    var arrayOfObjects = Array.prototype.slice.call(arguments);
    return arrayOfObjects.filter(function countQuack(key) {
        return Object.prototype.hasOwnProperty.call(key, 'quack');
    }).length;
}

module.exports = duckCount