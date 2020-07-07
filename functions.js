
exports.roll= function(min, max) {
        var number = Math.floor(Math.random() * (max - min + 1)) + min;
        return number;
    }

exports.hello = function() {
    return 'Hello brother';
}