// Loops are used to execute a block of code repeatedly.

// 1. for Loop
// Executes a block of code a specified number of times.
console.log("for Loop:");
for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}
console.log("\n");

// 2. while Loop
// Executes a block of code as long as a specified condition is true.
console.log("while Loop:");
let count = 0;
while (count < 5) {
  console.log("Count is", count);
  count++;
}
console.log("\n");

// 3. do...while Loop
// Executes a block of code once, and then repeats the loop as long as a specified condition is true.
// The code block is always executed at least once.
console.log("do...while Loop:");
let i = 5;
do {
  console.log("i is", i);
  i++;
} while (i < 5); // Condition is false, but the loop runs once.
console.log("\n");

// 4. for...in Loop
// Iterates over the properties of an object.
console.log("for...in Loop (for objects):");
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
console.log("\n");

// 5. for...of Loop (ES6)
// Iterates over iterable objects (like arrays, strings, maps, sets, etc.).
console.log("for...of Loop (for arrays):");
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
console.log("\n");

console.log("for...of Loop (for strings):");
const greeting = "Hello";
for (const char of greeting) {
  console.log(char);
}
console.log("\n");

// break and continue statements

// break: Exits the loop entirely.
console.log("break statement:");
for (let j = 0; j < 10; j++) {
  if (j === 5) {
    break; // Stop the loop when j is 5
  }
  console.log(j);
}
console.log("\n");

// continue: Skips the current iteration and proceeds to the next one.
console.log("continue statement:");
for (let k = 0; k < 10; k++) {
  if (k % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(k);
}
console.log("\n");

// --- Exercises ---

// 1. Use a `for` loop to print the numbers from 1 to 10.
// 2. Use a `while` loop to print the numbers from 10 down to 1.
// 3. Use a `do...while` loop to ask the user for a number until they enter a number greater than 10. (Conceptual: you can simulate user input with a variable).
// 4. Create an array of your favorite movies. Use a `for...of` loop to print each movie to the console.
// 5. Create an object with some key-value pairs. Use a `for...in` loop to print each key and its corresponding value.
// 6. Use a `for` loop to iterate from 1 to 20. Use the `continue` statement to skip the number 13.
// 7. Use a `for` loop to iterate from 1 to 20. Use the `break` statement to stop the loop when the number 15 is reached.
