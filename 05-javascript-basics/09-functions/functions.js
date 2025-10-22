
// Functions are blocks of reusable code that can be called to perform a specific task.

// 1. Function Declaration
// This is the classic way to define a function.
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Alice"); // Calling the function

// 2. Function Expression
// A function can also be defined as an expression and assigned to a variable.
const sayGoodbye = function(name) {
  console.log(`Goodbye, ${name}!`);
};
sayGoodbye("Bob");

// 3. Arrow Functions (ES6)
// A more concise syntax for writing function expressions.
const add = (a, b) => {
  return a + b;
};
console.log("Sum:", add(5, 3));

// If the function has only one statement, you can omit the curly braces and the 'return' keyword.
const subtract = (a, b) => a - b;
console.log("Difference:", subtract(10, 4));

// If the function has only one parameter, you can omit the parentheses.
const square = x => x * x;
console.log("Square of 5:", square(5));

// 4. Parameters and Arguments
// Parameters are the names listed in the function definition.
// Arguments are the real values passed to the function.

// Default Parameters (ES6)
function multiply(a, b = 1) { // b has a default value of 1
  return a * b;
}
console.log("Multiply 5 by 2:", multiply(5, 2));
console.log("Multiply 5 by default:", multiply(5));

// Rest Parameters (ES6)
// Allows a function to accept an indefinite number of arguments as an array.
function sumAll(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log("Sum of 1, 2, 3:", sumAll(1, 2, 3));
console.log("Sum of 10, 20, 30, 40:", sumAll(10, 20, 30, 40));

// 5. Return Statement
// The 'return' statement stops the execution of a function and returns a value.
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
let fullName = getFullName("John", "Doe");
console.log("Full Name:", fullName);

// 6. Immediately Invoked Function Expressions (IIFE)
// A function that is executed right after it is defined.
(function() {
  console.log("This is an IIFE!");
})();

// 7. Higher-Order Functions
// Functions that operate on other functions, either by taking them as arguments or by returning them.
function operate(operator, a, b) {
  return operator(a, b);
}
const result = operate(add, 10, 5);
console.log("Result of higher-order function:", result);

// 8. Callback Functions
// A function passed into another function as an argument, which is then invoked inside the outer function.
function processData(data, callback) {
  console.log("Processing data...");
  callback(data);
}
processData("Some data", (data) => {
  console.log("Callback executed with:", data);
});

// --- Exercises ---

// 1. Write a function declaration named 'calculateArea' that takes two parameters, 'width' and 'height', and returns the area of a rectangle.
// 2. Write a function expression named 'getGreeting' that takes a 'name' parameter and returns a greeting string.
// 3. Convert the 'getGreeting' function expression into an arrow function.
// 4. Write an arrow function named 'isEven' that takes a number and returns 'true' if it's even and 'false' otherwise.
// 5. Write a function that uses default parameters to greet a user. If no name is provided, it should default to "Guest".
// 6. Write a function that uses rest parameters to calculate the average of any number of arguments.
// 7. Write a higher-order function named 'operateOnNumbers' that takes two numbers and a callback function (e.g., add, subtract). The HOF should apply the callback to the two numbers and return the result.
