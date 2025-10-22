
// JavaScript has several primitive data types:

// 1. String: Represents textual data.
let stringVar = "Hello, World!";
console.log("String:", stringVar);

// 2. Number: Represents both integer and floating-point numbers.
let numberVar = 123;
let floatVar = 123.45;
console.log("Number:", numberVar);
console.log("Float:", floatVar);

// 3. BigInt: Represents integers of arbitrary length.
let bigIntVar = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigIntVar);

// 4. Boolean: Represents a logical entity and can have two values: true and false.
let booleanVar = true;
console.log("Boolean:", booleanVar);

// 5. Undefined: Represents a variable that has been declared but not assigned a value.
let undefinedVar;
console.log("Undefined:", undefinedVar);

// 6. Null: Represents the intentional absence of any object value.
let nullVar = null;
console.log("Null:", nullVar);

// 7. Symbol: Represents a unique identifier.
let symbolVar = Symbol("foo");
console.log("Symbol:", symbolVar);

// And one complex data type:

// 8. Object: Represents a collection of key-value pairs.
let objectVar = {
  name: "John Doe",
  age: 30
};
console.log("Object:", objectVar);
console.log("Object's name:", objectVar.name);
console.log("Object's age:", objectVar.age);
