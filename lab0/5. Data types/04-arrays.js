// Task 1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4


// Task 2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");


// Task 3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); 


// Task 4
function sumInput() {
  let numbers = [];
  let input;

  while (true) {
    input = prompt("Enter a number:");

    if (input === null || input.trim() === "" || isNaN(input)) break;

    numbers.push(+input);
  }

  let sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum;
}

alert("The sum is: " + sumInput());


// Task 5
function getMaxSubSum(arr) {
  let maxSum = 0; 
  let currentSum = 0;

  for (let item of arr) {
    currentSum = Math.max(0, currentSum + item); 
    maxSum = Math.max(maxSum, currentSum); 
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
