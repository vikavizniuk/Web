// Task 1
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];
  return wrapper;
}

function work(a, b) {
  console.log(a + b); // or any other arbitrary function logic
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}


// Task 2
function delay(f, ms) {
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
}

function f(x) {
  console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms


// Task 3
function debounce(f, ms) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => f.apply(this, args), ms);
  };
}

function f(x) {
  console.log(x);
}

let debouncedF = debounce(f, 1000);

debouncedF("a");
setTimeout(() => debouncedF("b"), 200);
setTimeout(() => debouncedF("c"), 500);
// Only "c" will be logged after 1000ms from the last call


// Task 4
function throttle(f, ms) {
  let isThrottled = false;
  let savedArgs, savedThis;

  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    f.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function f(a) {
  console.log(a);
}

let f1000 = throttle(f, 1000);

f1000(1); // shows 1 immediately
f1000(2); // ignored
f1000(3); // ignored

// after 1000 ms, shows 3 (the last call within the throttling period)
