function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

/*
By setting A.prototype and B.prototype to the same object, a’s prototype chain includes the shared prototype. Thus, a instanceof B returns true because B.prototype is indeed in a's prototype chain, even though a was created by A and not B.
*/