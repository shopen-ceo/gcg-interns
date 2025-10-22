// Higher-order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.
// They are a core concept of functional programming in JavaScript.
// We've already seen some examples, like functions taking callbacks.

// Let's focus on three common array methods that are higher-order functions:
// map(), filter(), and reduce().

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Array.prototype.map()
// Creates a new array by calling a provided function on every element in the calling array.
// It transforms each element into something else.

console.log("------ map() ------");
// Example: Create a new array with each number doubled.
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);

// Using an arrow function for conciseness:
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);
console.log("\n");


// 2. Array.prototype.filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
// It selects a subset of elements from the original array.

console.log("------ filter() ------");
// Example: Create a new array with only the even numbers.
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log("Original numbers:", numbers);
console.log("Even numbers:", evenNumbers);

// Using an arrow function:
const numbersGreaterThanFive = numbers.filter(num => num > 5);
console.log("Numbers greater than 5:", numbersGreaterThanFive);
console.log("\n");


// 3. Array.prototype.reduce()
// Executes a "reducer" function on each element of the array, resulting in a single output value.
// It "reduces" the array to a single value (e.g., a sum, an object, etc.).

console.log("------ reduce() ------");
// The reducer function takes four arguments:
// - accumulator: The accumulated value previously returned in the last invocation.
// - currentValue: The current element being processed in the array.
// - currentIndex (optional): The index of the current element.
// - array (optional): The array reduce() was called upon.

// Example: Calculate the sum of all numbers in the array.
const sum = numbers.reduce(function(accumulator, currentValue) {
  console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator.

console.log("Original numbers:", numbers);
console.log("Sum of all numbers:", sum);

// Using an arrow function:
const product = numbers.reduce((acc, curr) => acc * curr, 1); // Initial value is 1 for multiplication
console.log("Product of all numbers:", product);
console.log("\n");


// Chaining Higher-Order Functions
// You can chain these methods together to perform complex operations in a clean and readable way.

console.log("------ Chaining Methods ------");
// Example: Get the sum of the squares of all odd numbers.
const numbersForChaining = [1, 2, 3, 4, 5];

const sumOfSquaresOfOdds = numbersForChaining
  .filter(num => num % 2 !== 0) // [1, 3, 5]
  .map(num => num * num)      // [1, 9, 25]
  .reduce((acc, curr) => acc + curr, 0); // 1 + 9 + 25 = 35

console.log("Original numbers for chaining:", numbersForChaining);
console.log("Sum of squares of odd numbers:", sumOfSquaresOfOdds);
