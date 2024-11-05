// Task 1
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // null (2)

delete animal.jumps;

alert( rabbit.jumps ); // undefined (3)


// Task 2
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(pockets.glasses); // 1


// Task 3
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
console.log(rabbit.full); // true
console.log(animal.full); // undefined


// Task 4
let hamster = {
  eat(food) {
    if (!this.stomach) {
      this.stomach = []; // create a separate stomach for each instance
    }
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Now only `speedy` has the food in its own stomach
speedy.eat("apple");
console.log(speedy.stomach); // ["apple"]
console.log(lazy.stomach); // undefined or []
