// Task 1
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }

// Both functions work the same


// Task 2
// function checkAge(age) {
//   return age > 18 ? true : confirm('Did parents allow you?');
// }

// function checkAge(age) {
//   return age > 18 || confirm('Did parents allow you?');
// }


// Task 3
function min(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return a;
  }
}

result = min(2, 5);
alert(result);


// Task 4
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt('Enter the value of x:', '');
let n = prompt('Enter the value of n:', '');

if (n < 1) {
  alert(`Power ${n} is not supported, please enter an integer number greater than 1`);
} else {
  alert(pow(x, n));
}
