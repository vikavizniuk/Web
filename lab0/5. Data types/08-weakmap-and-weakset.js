// Task 1
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

function markAsRead(message) {
  readMessages.add(message);
}

function isRead(message) {
  return readMessages.has(message);
}

markAsRead(messages[0]);
console.log(isRead(messages[0])); // true
console.log(isRead(messages[1])); // false


// Task 2
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readDates = new WeakMap();

function markAsRead(message) {
  readDates.set(message, new Date());
}

function getReadDate(message) {
  return readDates.get(message) || "Not read yet";
}

markAsRead(messages[0]);
console.log(getReadDate(messages[0])); // Shows the read date
console.log(getReadDate(messages[1])); // "Not read yet"
