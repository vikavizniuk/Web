// Task 1
let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
  value: function() {
    return Object.keys(this).join(",");
  },
  enumerable: false
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

console.log(dictionary.toString()); // "apple,__proto__"


// Task 2
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); //undefined 
