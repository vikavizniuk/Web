// Task 1
// Loop
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Recursion
function sumTo(n) {
  return n === 1 ? 1 : n + sumTo(n - 1);
}

// Arithmetic progression
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(100)); // 5050


// Task 2
function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5)); // 120


// Task 3
function fib(n) {
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757


// Task 4
// Loop
function printList(list) {
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// Recursion
function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}


// Task 5
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}
