// Task 1
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name); // Call the parent constructor
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.name); // "White Rabbit"
console.log(rabbit.created); // The creation timestamp


// Task 2
class ExtendedClock extends Clock {
  constructor({ template, precision = 1000 }) {
    super({ template });
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

// Example usage:
// let clock = new ExtendedClock({ template: 'h:m:s', precision: 2000 });
// clock.start();
