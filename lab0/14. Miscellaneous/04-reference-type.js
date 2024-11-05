// Task 1
let user = {
  name: "John",
  go: function() { alert(this.name) }
};

user.go(); // "John"


// Task 2
let obj, method;

obj = {
  go: function() { alert(this); }
};

// (1) Directly calling obj.go() as a method of obj.
// Since go() is called as a method, "this" refers to obj.
obj.go();               // (1) [object Object]

// (2) The parentheses don't affect the this binding.
// (obj.go)() still calls go as a method of obj, so "this" is obj.
(obj.go)();             // (2) [object Object]

// (3) Assigning obj.go to method and then calling it.
// Now method() is called as a standalone function, not as a method of obj,
// so "this" is undefined in strict mode (or the global object in non-strict mode).
(method = obj.go)();    // (3) undefined

// (4) The expression (obj.go || obj.stop) evaluates to obj.go,
// but is called as a standalone function, so "this" is again undefined.
(obj.go || obj.stop)(); // (4) undefined
