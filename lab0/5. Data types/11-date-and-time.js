// Task 1
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);


// Task 2
function getWeekDay(date) {
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}

let date = new Date(2012, 0, 3);
console.log(getWeekDay(date)); // "TU"


// Task 3
function getLocalDay(date) {
  let day = date.getDay();
  return day === 0 ? 7 : day;
}

let date = new Date(2012, 0, 3);
console.log(getLocalDay(date)); // 2


// Task 4
function getDateAgo(date, days) {
  let resultDate = new Date(date);
  resultDate.setDate(date.getDate() - days);
  return resultDate.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1
console.log(getDateAgo(date, 2)); // 31
console.log(getDateAgo(date, 365)); // 2


// Task 5
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 1)); // 29 (February, leap year)
console.log(getLastDayOfMonth(2021, 0)); // 31 (January)
console.log(getLastDayOfMonth(2021, 3)); // 30 (April)


// Task 6
function getSecondsToday() {
  let now = new Date();
  let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((now - startOfDay) / 1000);
}

console.log(getSecondsToday());


// Task 7
function getSecondsToTomorrow() {
  let now = new Date();
  let startOfTomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.floor((startOfTomorrow - now) / 1000);
}

console.log(getSecondsToTomorrow());


// Task 8
function formatDate(date) {
  let diff = new Date() - date;

  if (diff < 1000) return "right now";
  if (diff < 60 * 1000) return `${Math.floor(diff / 1000)} sec. ago`;
  if (diff < 60 * 60 * 1000) return `${Math.floor(diff / (60 * 1000))} min. ago`;

  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear().toString().slice(-2);
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));
