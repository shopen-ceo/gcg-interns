// JavaScript has various operators to perform operations on values.

// 1. Arithmetic Operators
let a = 10;
let b = 5;
console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus (remainder)
console.log("a ** b =", a ** b); // Exponentiation (ES2016)
a++;
console.log("a++ =", a); // Increment
b--;
console.log("b-- =", b); // Decrement
console.log("\n");

// 2. Assignment Operators
let x = 10;
console.log("Assignment Operators:");
x += 5; // same as x = x + 5
console.log("x += 5 -> x =", x);
x -= 5; // same as x = x - 5
console.log("x -= 5 -> x =", x);
x *= 5; // same as x = x * 5
console.log("x *= 5 -> x =", x);
x /= 5; // same as x = x / 5
console.log("x /= 5 -> x =", x);
console.log("\n");

// 3. Comparison Operators
let val1 = 10;
let val2 = "10";
let val3 = 20;
console.log("Comparison Operators:");
console.log("val1 == val2:", val1 == val2);   // Equal to (loose equality, type coercion)
console.log("val1 === val2:", val1 === val2); // Strict equal to (value and type)
console.log("val1 != val2:", val1 != val2);   // Not equal to (loose)
console.log("val1 !== val2:", val1 !== val2); // Strict not equal to
console.log("val1 > val3:", val1 > val3);    // Greater than
console.log("val1 < val3:", val1 < val3);    // Less than
console.log("val1 >= 10:", val1 >= 10);      // Greater than or equal to
console.log("val3 <= 20:", val3 <= 20);      // Less than or equal to
console.log("\n");

// 4. Logical Operators
let p = true;
let q = false;
console.log("Logical Operators:");
console.log("p && q:", p && q); // Logical AND
console.log("p || q:", p || q); // Logical OR
console.log("!p:", !p);       // Logical NOT
console.log("\n");

// 5. Bitwise Operators
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary
console.log("Bitwise Operators:");
console.log("m & n:", m & n);   // Bitwise AND (0001 -> 1)
console.log("m | n:", m | n);   // Bitwise OR (0111 -> 7)
console.log("m ^ n:", m ^ n);   // Bitwise XOR (0110 -> 6)
console.log("~m:", ~m);         // Bitwise NOT
console.log("m << 1:", m << 1); // Left shift (1010 -> 10)
console.log("m >> 1:", m >> 1); // Right shift (0010 -> 2)
console.log("\n");

// 6. Ternary Operator (Conditional Operator)
let age = 20;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log("Ternary Operator:");
console.log("Can vote?", canVote);
console.log("\n");

// 7. Typeof Operator
console.log("Typeof Operator:");
console.log("typeof 123:", typeof 123);
console.log("typeof 'hello':", typeof "hello");
console.log("typeof true:", typeof true);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null); // This is a well-known quirk in JavaScript
console.log("\n");
