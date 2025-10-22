// A closure is a function that has access to its outer function's scope, even after the outer function has returned.
// This means a closure can remember and access variables and arguments of its outer function.

// 1. Basic Example of a Closure
function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  return innerFunction;
}

const myClosure = outerFunction(); // myClosure is now the innerFunction
myClosure(); // Even though outerFunction has finished, myClosure still has access to outerVariable

console.log("\n");

// 2. Practical Use Case: Private Variables and Methods
// Closures can be used to create private variables and methods, a concept known as the "module pattern".

const counter = (function() {
  let privateCount = 0; // This variable is private to the closure

  function changeBy(val) {
    privateCount += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCount;
    }
  };
})();

console.log("Counter value:", counter.value()); // 0
counter.increment();
counter.increment();
console.log("Counter value after incrementing twice:", counter.value()); // 2
counter.decrement();
console.log("Counter value after decrementing:", counter.value()); // 1
// console.log(counter.privateCount); // undefined, cannot access privateCount directly

console.log("\n");

// 3. Closures in Loops
// A common pitfall with closures and loops.

// Incorrect usage with 'var'
console.log("Incorrect usage with 'var':");
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Will log 4, 4, 4
  }, i * 100);
}
// By the time the setTimeout callbacks run, the loop has finished and 'i' is 4.

// Correct usage with 'let' (ES6)
// 'let' creates a new binding for each iteration of the loop.
console.log("Correct usage with 'let':");
for (let j = 1; j <= 3; j++) {
  setTimeout(function() {
    console.log(j); // Will log 1, 2, 3 correctly
  }, j * 100 + 500);
}

// Correct usage with an IIFE (Immediately Invoked Function Expression) - pre-ES6 solution
console.log("Correct usage with an IIFE:");
for (var k = 1; k <= 3; k++) {
  (function(k_copy) {
    setTimeout(function() {
      console.log(k_copy); // Will log 1, 2, 3 correctly
    }, k * 100 + 1000);
  })(k);
}

// 4. Another Example: Function Factory
function makeGreeter(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetHello = makeGreeter("Hello");
const greetGoodbye = makeGreeter("Goodbye");

greetHello("Alice");
greetGoodbye("Bob");
