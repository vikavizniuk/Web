// // Task 1
let i = 3;

while (i) {
  alert(i--);
} // alert will show 1

// Task 2.1 - from 1 to 4
let i = 0;
while (++i < 5) alert(i); 

// // Task 2.2 - from 1 to 5
let i = 0;
while (i++ < 5) alert(i); 

// Task 3
for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4

// Task 4
for (let i = 2; i <= 10; i += 2) {
  alert(i);
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// Task 5
let i = 0;

while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Task 6
let number = prompt('Enter a number greater than 100:', '');

while (number <= 100 && number) {
  number = prompt('Enter a number greater than 100:', '');
}

// Task 7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue nextPrime;
    }
  }
  alert(i);
}
