// A function is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).

// Function Declaration
// This is the most common way to define a function.
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function Invocation (Calling the function)
greet("John"); // Outputs: "Hello, John!"

// Function with a return value
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log("The sum is:", sum); // Outputs: "The sum is: 8"

// Function Expression
// A function can also be defined as an expression.
// A function expression can be stored in a variable.
const multiply = function(a, b) {
    return a * b;
};

let product = multiply(4, 6);
console.log("The product is:", product); // Outputs: "The product is: 24"

// Arrow Function
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax.
const subtract = (a, b) => {
    return a - b;
};

let difference = subtract(10, 4);
console.log("The difference is:", difference); // Outputs: "The difference is: 6"

// If the function has only one statement, and the statement returns a value,
// you can remove the brackets and the return keyword.
const square = x => x * x;

let squaredNumber = square(5);
console.log("The squared number is:", squaredNumber); // Outputs: "The squared number is: 25"
