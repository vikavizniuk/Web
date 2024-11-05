// Task 1
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("john")); 


// Task 2
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));


// Task 3
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!", 20));


// Task 4
function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert(extractCurrencyValue("$120"));
