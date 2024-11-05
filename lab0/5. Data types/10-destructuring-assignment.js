// Task 1
let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false


// Task 2
function topSalary(salaries) {
  let maxSalary = 0;
  let topPaidPerson = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topPaidPerson = name;
    }
  }

  return topPaidPerson;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries)); // "Pete" 
