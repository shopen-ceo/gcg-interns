
// Arrays are a special type of object used for storing ordered collections of data.

// 1. Creating an Array
// Using array literal (most common way)
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits array:", fruits);

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers array:", numbers);

// 2. Accessing Array Elements
// You access elements using their index (starting from 0).
console.log("First fruit:", fruits[0]); // Apple
console.log("Second fruit:", fruits[1]); // Banana
console.log("Last fruit:", fruits[fruits.length - 1]); // Cherry

// 3. Modifying Array Elements
fruits[1] = "Blueberry";
console.log("Modified fruits array:", fruits);

// 4. Common Array Properties and Methods

// length: Get the number of elements in an array.
console.log("Number of fruits:", fruits.length);

// push(): Add an element to the end of the array.
fruits.push("Date");
console.log("Fruits after push:", fruits);

// pop(): Remove the last element from the array.
let removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);
console.log("Fruits after pop:", fruits);

// unshift(): Add an element to the beginning of the array.
fruits.unshift("Apricot");
console.log("Fruits after unshift:", fruits);

// shift(): Remove the first element from the array.
let shiftedFruit = fruits.shift();
console.log("Shifted fruit:", shiftedFruit);
console.log("Fruits after shift:", fruits);

// indexOf(): Find the index of an element.
let cherryIndex = fruits.indexOf("Cherry");
console.log("Index of Cherry:", cherryIndex);

// slice(): Create a new array from a portion of an existing array.
let citrus = ["Lemon", "Lime", "Orange", "Grapefruit"];
let subCitrus = citrus.slice(1, 3); // Extracts elements from index 1 up to (but not including) index 3
console.log("Sub-array of citrus:", subCitrus);

// splice(): Add or remove elements from an array.
let colors = ["Red", "Green", "Blue"];
// Remove "Green" and add "Yellow" and "Orange"
colors.splice(1, 1, "Yellow", "Orange");
console.log("Colors after splice:", colors);

// 5. Iterating Over an Array

// Using a for loop
console.log("Iterating with for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using a for...of loop (ES6)
console.log("Iterating with for...of loop:");
for (const fruit of fruits) {
  console.log(fruit);
}

// Using the forEach() method
console.log("Iterating with forEach():");
fruits.forEach(function(fruit, index) {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

// 6. Multi-dimensional Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Multi-dimensional array (matrix):", matrix);
console.log("Element at row 1, col 2:", matrix[1][2]); // 6
