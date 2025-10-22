// Error handling is a crucial part of writing robust applications.
// In JavaScript, we use the try...catch statement to handle errors.

// 1. The try...catch Statement
// The 'try' block contains code that might throw an error.
// The 'catch' block contains code to be executed if an error occurs.

console.log("Before try...catch");

try {
  // Let's try to execute some code that will cause an error.
  let result = nonExistentVariable;
  console.log(result); // This line will not be reached.
} catch (error) {
  console.error("An error occurred!");
  console.error("Error name:", error.name);       // The type of error (e.g., "ReferenceError")
  console.error("Error message:", error.message); // The error message
  // console.error("Error stack:", error.stack);  // The stack trace
}

console.log("After try...catch");
console.log("\n");

// 2. The 'finally' Block
// The 'finally' block executes after the 'try' and 'catch' blocks, regardless of whether an error occurred.
// It's useful for cleanup tasks, like closing a file or a network connection.

try {
  console.log("In the try block.");
  // throw new Error("Simulating an error"); // Uncomment to see 'finally' with an error
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("This is the finally block. It always runs.");
}
console.log("\n");

// 3. The 'throw' Statement
// You can create your own custom errors using the 'throw' statement.
// You can throw a string, a number, a boolean, or an object.
// It's common practice to throw an Error object.

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  let result1 = divide(10, 2);
  console.log("Result of 10 / 2:", result1);

  let result2 = divide(10, 0);
  console.log("Result of 10 / 0:", result2); // This line will not be reached.
} catch (error) {
  console.error("Caught a custom error:", error.message);
}
console.log("\n");

// 4. Error Types
// JavaScript has several built-in error types:
// - Error: A generic error object.
// - ReferenceError: When trying to access a variable that is not defined.
// - TypeError: When a value is not of the expected type.
// - SyntaxError: When there's a syntax error in the code.
// - RangeError: When a number is outside an allowable range.

try {
  let num = 1;
  num.toUpperCase(); // This will cause a TypeError
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Caught a TypeError as expected.");
  } else {
    console.error("Caught an unexpected error:", error);
  }
}
