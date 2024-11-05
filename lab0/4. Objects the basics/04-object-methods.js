// Task 1
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    } 
  };
}

let user = makeUser();
alert( user.ref().name );


// Task 2
let calculator = {
  read() {
    this.a = +prompt('Enter first number:', 0);
    this.b = +prompt('Enter second number:', 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Task 3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },
  
  showStep() {
    alert(this.step);
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); 

