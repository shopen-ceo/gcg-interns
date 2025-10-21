// Javascript Tutorial 1


let name = "john"; //datatype: string
// When a string is added with other datatypes, it is treated as string concatenation
// Where a + a = aa


// In this example, we have made use of escape characters
// Use '\' inside of string to make those operations
// \n : new line (Pressing Enter Key)
// \t : new line (Pressing Tab Key)

let age = 20; // datatype: number  // TASK: BIGINT Datatype
let perfect_age = 20.5 // float

// console.log(typeof(age))
// console.log(typeof(perfect_age))

let age_old = "20";
// Number data type supports numerical operations like add, subtract, multiply, divide and modal (remainder check)

let srushti = true; // Datatype =  Boolean 
let manali = false; //


// console.log(age === age_old); // Strict Equality Check (Datatype Checking) // false when datatype mismatch
// console.log(age == age_old); // Equality Check // True when datatype mismatch, but same value

// Logical Operators '&': True when both values are true Ex. true and true = 1, false and (any) = 1
// Logical Operators '|': True when both values are true Ex. true and (any) = 1, false and false = 0
// Logical Operators '!': True when both values are true Ex. !true = false, !false = true

// Even null and undefined are datatypes, they are used when we need to declare values that are non existant or not yet defined


// Array
let home = ["Rooms", 900, true, 25.5, null, undefined]
console.log(home.toString()) // Converts array to String, for non existent values, it puts empty value with commas
let newHome = [] // An empty array can be declared
// List Items can be stored
// Indexes start from zero, they are fundamental in performing most array operations
// But the length of a non empty list is always measured considering the number of elements in that array, here: length = 4


// HTML JS -> 
// JS always executed its code from top to bottom, so when you add it on top of a page, it is executed before DOM is loaded and vice-versa.


newHome.push("Prajakta") // We add an element to array
// newHome.unshift("Srushti") // We add an element to the 0th index of an array
newHome.push("Samruddhi") // We add an element to array
// newHome.push("Ankita") // We add an element to array
// newHome.unshift("Sanika") // We add an element to the 0th index of an array
// newHome.pop() // With this method we get rid of the last element of an array
// newHome.shift() // Removes element at the 0th index
console.log(newHome)

// console.log(home[5])
// console.log(home.length)


newHome.forEach(element => console.log("Hello " + element)) // ES6 Syntax (Arrow Function)

const add = (a, b) => { return a + b } // Syntax to create a one line arrow function

console.log()

console.log(newHome.join(" & ")) // Join puts the paramerter string to tailor the elements together

allGirls = "Sanika & Srushti & Prajakta & Samruddhi" 
girlsList = allGirls.split(" & ") // Split works on strings to split the string into individual array elements 
console.log(girlsList)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let favFruit = fruits.at(0); // Works similar to fruits[2] where 'at' keyword refers to the index at which the element is present

// Object
let home_data = {
    "rooms": ["living", "bedroom", "kitchen", "washrooms"],
    "addr": {
        "house number": 900,
        "street": "Main Road",
        "city": "Kolhapur",
        "pin": 416001
    },
    "electric_status": true,
    "room_temperature": 25.5
}
// console.log(Array.isArray(home_data))