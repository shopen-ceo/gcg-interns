
// In JavaScript, you can declare variables to store data.
// There are three keywords for declaring variables: var, let, and const.

// 'var' was the original way to declare variables. It has function scope.
var name = "John Doe";
console.log("var name:", name);

// 'let' was introduced in ES6 (2015). It has block scope.
let age = 30;
console.log("let age:", age);

// 'const' is also from ES6 and has block scope. It's for variables that won't be reassigned.
const PI = 3.14;
console.log("const PI:", PI);

// You can also declare multiple variables at once.
let x = 1, y = 2, z = 3;
console.log("Multiple variables:", x, y, z);

// Variable names can include letters, numbers, underscores, and dollar signs.
// They must start with a letter, underscore, or dollar sign.
let $myVariable = "This is a variable with a dollar sign";
let _anotherVariable = "This is a variable with an underscore";
console.log($myVariable);
console.log(_anotherVariable);

// JavaScript is dynamically typed, meaning you don't have to specify the data type of a variable.
let myVariable = "This is a string";
console.log("myVariable as a string:", myVariable);
myVariable = 100;
console.log("myVariable as a number:", myVariable);

// --- Exercises ---

// 1. Declare a variable named 'favoriteColor' using 'let' and assign it your favorite color as a string.
// 2. Declare a constant named 'BIRTH_YEAR' using 'const' and assign it the year you were born.
// 3. Try to reassign a new value to 'BIRTH_YEAR'. What happens? Add a comment explaining the result.
// 4. Declare a variable using 'var' inside a block (e.g., an if statement) and try to access it outside the block.
//    `if (true) { var myOldSchoolVar = "I am old"; }`
//    Then, console.log(myOldSchoolVar);
// 5. Declare a variable using 'let' inside a block and try to access it outside the block. What's the difference?
