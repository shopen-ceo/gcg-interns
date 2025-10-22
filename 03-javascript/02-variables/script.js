// In JavaScript, there are three ways to declare a variable: var, let, and const.

// var was the original way to declare variables. It has some issues with scope, so it's generally recommended to use let and const instead.
var myVar = "This is a var variable.";
console.log(myVar);

// let allows you to declare variables that can be reassigned.
let myLet = "This is a let variable.";
console.log(myLet);
myLet = "This is a reassigned let variable.";
console.log(myLet);

// const allows you to declare variables that cannot be reassigned.
const myConst = "This is a const variable.";
console.log(myConst);
// The following line would cause an error:
// myConst = "This will not work.";

// JavaScript has several data types:

// String: a sequence of characters
let myString = "Hello, World!";
console.log("This is a string:", myString);

// Number: a numeric value
let myNumber = 123;
console.log("This is a number:", myNumber);

// Boolean: true or false
let myBoolean = true;
console.log("This is a boolean:", myBoolean);

// Object: a collection of key-value pairs
let myObject = {
    name: "John",
    age: 30
};
console.log("This is an object:", myObject);

// Array: a list of values
let myArray = [1, 2, 3, "four", "five"];
console.log("This is an array:", myArray);

// null: represents the intentional absence of any object value
let myNull = null;
console.log("This is a null value:", myNull);

// undefined: a variable that has been declared but not assigned a value
let myUndefined;
console.log("This is an undefined value:", myUndefined);
