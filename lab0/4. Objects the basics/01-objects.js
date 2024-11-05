// Task 1
user = {
  name: 'John',
  surname: 'Smith'
}

user.name = 'Pete'
delete user.name


// Task 2
let schedule = {}

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

alert(isEmpty(schedule));
schedule['8:30'] = 'get up';
alert(isEmpty(schedule));



// Task 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);



// Task 4
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

multiplyNumeric(menu);
