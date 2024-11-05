// Task 1
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // ["Hare", "Krishna", ":-O"]


// Task 2
function aclean(arr) {
  let map = new Map();

  arr.forEach(word => {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  });

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // ["nap", "teachers", "ear"]


// Task 3
let map = new Map();
map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("more");

console.log(keys); // ["name", "more"]
