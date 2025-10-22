
// ES6 (ECMAScript 2015) introduced a lot of new features to JavaScript.
// Here are some of the most important ones.

// 1. let and const
// 'let' for block-scoped variables, 'const' for block-scoped constants.
// (Covered in 01-variables, but worth mentioning here as an ES6 feature).
let x = 10;
const Y = 20;

// 2. Arrow Functions
// A more concise syntax for writing functions.
// (Covered in 09-functions).
const add = (a, b) => a + b;

// 3. Template Literals
// A way to embed expressions inside string literals.
const name = "John";
const greeting = `Hello, ${name}!`;
console.log("Template Literal:", greeting);

// 4. Destructuring Assignment
// A way to unpack values from arrays or properties from objects into distinct variables.

// Object Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
const { firstName, age } = person;
console.log("Destructured from object:", firstName, age);

// Array Destructuring
const fruits = ["Apple", "Banana", "Cherry"];
const [firstFruit, secondFruit] = fruits;
console.log("Destructured from array:", firstFruit, secondFruit);

// 5. Spread and Rest Operators (...)

// Spread Operator: Expands an iterable (like an array) into individual elements.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log("Spread operator:", arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log("Spread operator with objects:", obj2);

// Rest Operator: Collects multiple elements into an array.
// (Covered in 09-functions).
function sum(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}
console.log("Rest operator:", sum(1, 2, 3, 4));

// 6. Default Parameters
// Allows you to initialize function parameters with default values.
// (Covered in 09-functions).
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greetUser();
greetUser("Alice");

// 7. Classes
// A syntactical sugar over JavaScript's existing prototype-based inheritance.
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
const john = new PersonClass("John", 30);
john.sayHello();

// 8. Modules
// A way to organize code into separate files.
// (This cannot be demonstrated in a single file running in Node.js without a proper setup).
// Example:
// In file 'math.js':
// export const PI = 3.14;
// export function add(a, b) { return a + b; }

// In another file 'app.js':
// import { PI, add } from './math.js';
// console.log(PI);
// console.log(add(2, 3));

// 9. Promises
// An object representing the eventual completion or failure of an asynchronous operation.
// (Will be covered in more detail in the async section).
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
});

myPromise.then(result => console.log(result));

// 10. for...of Loop
// A modern way to iterate over iterables like arrays and strings.
// (Covered in 08-loops).
for (const fruit of fruits) {
  console.log(fruit);
}
