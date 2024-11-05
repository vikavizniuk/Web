function calculator() {
  let expression = prompt("Enter an arithmetic expression:", "");
  if (expression !== null) {
    try {
      let result = eval(expression);
      alert(`Result: ${result}`);
    } catch (e) {
      alert("Error: Invalid expression");
    }
  }
}

calculator();
