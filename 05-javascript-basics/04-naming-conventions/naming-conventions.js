
// JavaScript naming conventions are important for writing clean and readable code.

// 1. Variable and Function Names: Use camelCase.
// This means the first word is lowercase, and subsequent words are capitalized.
let myVariableName = "some value";
function doSomething() {
  // function body
}

// Good examples:
let firstName = "John";
let lastName = "Doe";
let userAge = 30;
function calculateTotalPrice(price, quantity) {
  return price * quantity;
}

// Bad examples (avoid these):
// let firstname; // Not descriptive
// let last_name; // Uses snake_case, common in other languages but not JS for variables
// let UserAge;   // Starts with an uppercase letter, which is for classes

// 2. Constant Names: Use UPPERCASE_SNAKE_CASE.
// For variables that are intended to be constants (their value should not change).
const PI = 3.14159;
const MAX_SIZE = 100;
const API_KEY = "your-api-key-here";

// 3. Class Names: Use PascalCase (also known as UpperCamelCase).
// The first letter of each word is capitalized.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  // class body
}

// 4. File Names: Use kebab-case or camelCase.
// kebab-case is often preferred for file names as it's URL-friendly.
// e.g., 'user-profile.js', 'api-helpers.js'
// camelCase is also used.
// e.g., 'userProfile.js', 'apiHelpers.js'
// Be consistent with the convention you choose in your project.

// 5. Private Variables (by convention): Use a leading underscore.
// JavaScript doesn't have true private variables, but a leading underscore
// is a common convention to indicate that a variable or method is intended
// for internal use and should not be modified from the outside.
class Wallet {
  constructor() {
    this._balance = 0; // private by convention
  }

  deposit(amount) {
    this._balance += amount;
  }

  getBalance() {
    return this._balance;
  }
}

// General Rules:
// - Be descriptive and meaningful. `let a = 5;` is less clear than `let numberOfApples = 5;`.
// - Avoid abbreviations unless they are widely understood (e.g., 'http', 'api').
// - Be consistent with the chosen naming conventions throughout your project.

// --- Exercises ---

// 1. Below are some variables with unconventional names. Rewrite them using the correct JavaScript naming conventions.
//    let user_name = "Alice";
//    let USER_AGE = 25;
//    const Max_Users = 100;
//    class userprofile { /* ... */ }
//    function calculate_total_price() { /* ... */ }

// 2. Create a variable to store the number of items in a shopping cart. Choose a descriptive and conventional name.
// 3. Create a constant to store the value of the gravitational constant (9.8). Choose a conventional name.
// 4. Create a class for a `Product`. Choose a conventional name.
