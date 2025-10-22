
// Objects are collections of key-value pairs. They are a fundamental part of JavaScript.

// 1. Creating an Object
// Using object literal (most common way)
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  "full name": "John Doe" // Keys with spaces need to be in quotes
};
console.log("Person object:", person);

// Using the Object constructor
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2022;
console.log("Car object:", car);

// 2. Accessing Object Properties
// Using dot notation
console.log("Person's first name:", person.firstName);
console.log("Car's make:", car.make);

// Using bracket notation (required for keys with spaces or special characters)
console.log("Person's full name:", person["full name"]);
let propertyName = "age";
console.log("Person's age (dynamic):", person[propertyName]);

// 3. Modifying Object Properties
person.age = 31;
console.log("Updated person's age:", person.age);

// 4. Adding New Properties
person.city = "New York";
console.log("Person object with new city:", person);

// 5. Deleting Properties
delete person.isStudent;
console.log("Person object after deleting isStudent:", person);

// 6. Objects with Methods
// Methods are functions stored as object properties.
let circle = {
  radius: 5,
  calculateArea: function() {
    return Math.PI * this.radius * this.radius;
  }
};
console.log("Circle's radius:", circle.radius);
console.log("Circle's area:", circle.calculateArea());

// 7. Iterating Over Object Properties
// Using a for...in loop
console.log("Iterating over person object:");
for (let key in person) {
  if (person.hasOwnProperty(key)) { // Good practice to check if the property belongs to the object itself
    console.log(`${key}: ${person[key]}`);
  }
}

// 8. Nested Objects
let student = {
  name: "Alice",
  age: 22,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345"
  }
};
console.log("Student's city:", student.address.city);

// 9. Object Keys, Values, and Entries (ES2017)
console.log("Object keys:", Object.keys(person));
console.log("Object values:", Object.values(person));
console.log("Object entries:", Object.entries(person));
