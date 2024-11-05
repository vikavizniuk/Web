// Task 1
// 1
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert(rabbit.eats); // true


// 2
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert(rabbit.eats); // false


// 3
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert(rabbit.eats); // true


// 4
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert(rabbit.eats); // undefined



// Task 2
// Example that works correctly
function Rabbit(name) {
  this.name = name;
}

let obj = new Rabbit("Bunny");

let obj2 = new obj.constructor("Fluffy");

console.log(obj2.name); // "Fluffy"
console.log(obj2 instanceof Rabbit); // true


// Example that fails
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = {}; // Overriding the prototype, losing the constructor reference

let obj = new Rabbit("Bunny");

let obj2 = new obj.constructor("Fluffy");

console.log(obj2.name); // undefined or error
console.log(obj2 instanceof Rabbit); // false
