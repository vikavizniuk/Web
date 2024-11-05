if ('0') {
  alert( "Hello" );
}
// alert will be shown

let officialName = promt('What is the "official" name of JavaScript?', '');

if (officialName == 'ECMAScript') {
  alert('Right!');
} else {
  alert('You don\'t know? "ECMAScript"!');
}

let number = prompt('Enter a number', 0);

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
