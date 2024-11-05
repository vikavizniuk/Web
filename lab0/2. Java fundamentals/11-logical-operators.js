// // Task 1
// alert(null || 2 || undefined); // alert will show 2, because it is the first truthy value


// // Task 2
// alert(alert(1) || 2 || alert(3)); // alert will show 1, then 2, because alert(1) returns undefined, which is falsy, so the next value is returned, which is 2


// // Task 3
// alert(1 && null && 2); // alert will show null, because it is the first falsy value


// // Task 4
// alert(alert(1) && alert(2)); // alert will show 1, then undefined, because alert(1) returns undefined, which is falsy, so the next value is not returned


// // Task 5
// alert(null || 2 && 3 || 4); // alert will show 3, because it is the first truthy value


// // Task 6
// let age = prompt('Enter your age', 0);

// if (age >= 14 && age <= 90) {
//   alert('Your age is between 14 and 90');
// }


// // Task 7
// if (!(age >= 14 && age <= 90)) {
//   alert('Your age is not between 14 and 90');
// }

// if (age < 14 || age > 90) {
//   alert('Your age is not between 14 and 90');
// }


// // Task 8
// if (-1 || 0) {
//   alert('first');
// } // alert will show 'first', because -1 is truthy

// if (-1 && 0) {
//   alert('second');
// } // alert will not show, because 0 is falsy

// if (null || -1 && 1) {
//   alert('third');
// } // alert will show 'third', because 1 is truthy

// Task 9
let login = prompt('Enter your username', '');

if (login == 'Admin') {
  let password = prompt('Enter your password', '');

  if (password == 'TheMaster') {
    alert('Welcome!');
  } else if (password == '' || password == null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
} else if (login == '' || login == null) {
  alert('Canceled');
} else {
  alert('I don\'t know you');
}
