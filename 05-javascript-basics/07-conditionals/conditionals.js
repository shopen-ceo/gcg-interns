
// Conditionals are used to execute different blocks of code based on certain conditions.

// 1. if Statement
// Executes a block of code if a specified condition is true.
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}

// 2. if...else Statement
// Executes one block of code if the condition is true, and another if it's false.
let temperature = 25;
if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's not too hot today.");
}

// 3. if...else if...else Statement
// Used to specify a new condition to test, if the first condition is false.
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D or F");
}

// 4. switch Statement
// Used to perform different actions based on different conditions.
let day = new Date().getDay(); // Returns a number from 0 (Sunday) to 6 (Saturday)
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown Day";
}
console.log("Today is", dayName);

// The 'break' keyword is important. If you omit it, execution will "fall through"
// to the next case.

// 5. Ternary Operator (a shorthand for if...else)
// condition ? expressionIfTrue : expressionIfFalse
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

// Truthy and Falsy Values
// In JavaScript, some values are considered "falsy" in a boolean context.
// Falsy values are: false, 0, -0, 0n, "", null, undefined, NaN
// All other values are "truthy".

let myVar = ""; // Falsy
if (myVar) {
  console.log("This will not be printed.");
} else {
  console.log("myVar is falsy.");
}

let anotherVar = "hello"; // Truthy
if (anotherVar) {
  console.log("anotherVar is truthy.");
}
