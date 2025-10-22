// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// It is easy for humans to read and write, and easy for machines to parse and generate.
// Although it's derived from JavaScript, it is language-independent.

// 1. JSON Syntax Rules
// - Data is in name/value pairs (like JavaScript object properties).
// - Data is separated by commas.
// - Curly braces {} hold objects.
// - Square brackets [] hold arrays.
// - Keys must be strings, written with double quotes.

// Example of a JSON string:
const jsonString = `{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  }
}`;

// 2. JSON.parse(): Converting a JSON String to a JavaScript Object
// This method takes a JSON string and transforms it into a JavaScript object.

const personObject = JSON.parse(jsonString);

console.log("JavaScript object from JSON string:", personObject);
console.log("Accessing a property:", personObject.name);
console.log("Accessing a nested property:", personObject.address.city);
console.log("\n");

// 3. JSON.stringify(): Converting a JavaScript Object to a JSON String
// This method takes a JavaScript object and transforms it into a JSON string.

const carObject = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  features: ["GPS", "Bluetooth"],
  owner: undefined, // undefined, functions, and symbols are not valid JSON values
  start: function() {
    console.log("Engine started");
  }
};

const jsonCarString = JSON.stringify(carObject);

console.log("JSON string from JavaScript object:");
console.log(jsonCarString);
// Note that the 'owner' and 'start' properties are omitted from the JSON string.

// JSON.stringify() can also take additional arguments for formatting.
// The second argument is a 'replacer' function, and the third is for indentation.
const formattedJsonString = JSON.stringify(carObject, null, 2); // Indent with 2 spaces
console.log("\nFormatted JSON string:");
console.log(formattedJsonString);
console.log("\n");

// 4. Common Use Cases for JSON
// - Storing configuration data.
// - Transmitting data between a server and a web application (e.g., in an API response).
// - Used in NoSQL databases like MongoDB.

// Example of fetching JSON from an API (conceptual)
/*
fetch('https://api.example.com/data')
  .then(response => response.json()) // .json() is a method that parses the JSON response
  .then(data => {
    console.log("Data from API:", data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
*/
