// Task 1
// setInterval
function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printNumbers(1, 5);

// setTimeout
function printNumbers(from, to) {
  let current = from;

  function go() {
    console.log(current);
    if (current < to) {
      current++;
      setTimeout(go, 1000);
    }
  }

  setTimeout(go, 1000);
}

printNumbers(1, 5);


// Task 2
let i = 0;

setTimeout(() => alert(i), 100); // 100000000
