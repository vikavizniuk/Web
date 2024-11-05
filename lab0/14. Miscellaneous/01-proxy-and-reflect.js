// Task 1
function wrap(target) {
  return new Proxy(target, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      } else {
        throw new ReferenceError(`Property doesn't exist: "${prop}"`);
      }
    }
  });
}

let user = {
  name: "John"
};

user = wrap(user);

console.log(user.name); // "John"
console.log(user.age); // ReferenceError: Property doesn't exist: "age"


// Task 2
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop) {
    if (typeof prop === "string" && prop < 0) {
      let index = target.length + Number(prop); 
      return target[index];
    }
    return target[prop]; 
  }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2
console.log(array[-3]); // 1
console.log(array[0]);  // 1 (regular access still works)


// Task 3
function makeObservable(target) {
  let handlers = [];

  target.observe = function(handler) {
    handlers.push(handler);
  };

  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(target, property, value, receiver);
      if (success) {
        handlers.forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = "John"; // logs: SET name=John
