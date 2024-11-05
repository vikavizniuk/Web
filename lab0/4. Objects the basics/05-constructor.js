// Task 1
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );


// Task 2
function Calculator() {
  this.read = function() {
    this.a = +prompt('Enter first number:', 0);
    this.b = +prompt('Enter second number:', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


// Task 3
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Enter a number:', 0);
  };
}
