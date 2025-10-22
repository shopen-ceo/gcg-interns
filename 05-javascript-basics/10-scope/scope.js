
// Scope in JavaScript refers to the context in which variables are declared and accessed.

// 1. Global Scope
// Variables declared outside of any function have global scope.
// They can be accessed from anywhere in your JavaScript code.
let globalVar = "I am a global variable";

function showGlobalVar() {
  console.log(globalVar);
}
showGlobalVar();
console.log(globalVar); // Accessible here as well

// 2. Function Scope (or Local Scope)
// Variables declared inside a function are in the function scope.
// They can only be accessed within that function.
function myFunction() {
  let functionVar = "I am a function-scoped variable";
  console.log(functionVar);
}
myFunction();
// console.log(functionVar); // This would cause an error: functionVar is not defined

// 3. Block Scope (ES6)
// With 'let' and 'const', variables can be scoped to the nearest pair of curly braces {}.
// This includes if statements, for loops, etc.
if (true) {
  let blockVar = "I am a block-scoped variable";
  const blockConst = "I am also block-scoped";
  console.log(blockVar);
  console.log(blockConst);
}
// console.log(blockVar); // Error: blockVar is not defined
// console.log(blockConst); // Error: blockConst is not defined

// 'var' does not have block scope.
if (true) {
  var oldVar = "I am declared with var";
}
console.log(oldVar); // Accessible here, which can be a source of bugs.

// 4. Lexical Scope (or Static Scope)
// The scope of a variable is determined by its position in the source code.
// Inner functions have access to the variables of their outer functions.
function outer() {
  let outerVar = "I am from the outer function";

  function inner() {
    let innerVar = "I am from the inner function";
    console.log(outerVar); // Can access outerVar
    console.log(innerVar);
  }
  inner();
  // console.log(innerVar); // Error: innerVar is not defined here
}
outer();

// 5. Scope Chain
// When you try to access a variable, JavaScript looks for it in the current scope.
// If it's not found, it looks in the outer scope, and so on, up to the global scope.
// This is called the scope chain.

let a = 1;
function first() {
  let b = 2;
  function second() {
    let c = 3;
    console.log(a + b + c); // Accesses variables from all scopes
  }
  second();
}
first();
