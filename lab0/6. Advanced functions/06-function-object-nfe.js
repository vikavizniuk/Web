// Task 1
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function(value) {
    count = value;
  };

  counter.decrease = function() {
    count--;
  };

  return counter;
}

let counter = makeCounter();

console.log(counter());       // 0
console.log(counter());       // 1
counter.set(10);
console.log(counter());       // 10
counter.decrease();
console.log(counter());       // 10 (after decrease, it's 9 but increments to 10 when called)


// Task 2
function sum(a) {
  let currentSum = a;

  function inner(b) {
    currentSum += b;
    return inner;
  }

  inner.valueOf = function() {
    return currentSum;
  };

  return inner;
}

console.log(sum(1)(2) == 3);         // true
console.log(sum(1)(2)(3) == 6);      // true
console.log(sum(5)(-1)(2) == 6);     // true
console.log(sum(6)(-1)(-2)(-3) == 0); // true
console.log(sum(0)(1)(2)(3)(4)(5) == 15); // true
