function typeChecker(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        var t = "I LOVE YOU";
        return t;
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        var t = "NOT MATCHED";
        return t;
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        var t = a + b;
        return t;
    }
}
//Test cases
var a1 = "Jack";
var b1 = "Rose";
var a2 = 555;
var b2 = 100;
var a3 = "Jack";
var b3 = 100;
console.log(typeChecker(a1, b1));
console.log(typeChecker(a2, b2));
console.log(typeChecker(a3, b3));
module.exports = typeChecker;
