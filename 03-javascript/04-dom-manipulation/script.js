// The Document Object Model (DOM) is a programming interface for web documents.
// It represents the page so that programs can change the document structure, style, and content.

// Selecting Elements

// getElementById: selects a single element by its id
const mainHeading = document.getElementById("main-heading");
console.log("Selected by ID:", mainHeading);

// getElementsByClassName: selects a collection of elements by their class name
const introParagraphs = document.getElementsByClassName("intro-paragraph");
console.log("Selected by Class Name:", introParagraphs);

// getElementsByTagName: selects a collection of elements by their tag name
const allParagraphs = document.getElementsByTagName("p");
console.log("Selected by Tag Name:", allParagraphs);

// querySelector: selects the first element that matches a CSS selector
const container = document.querySelector("#container");
console.log("Selected by querySelector:", container);

// querySelectorAll: selects all elements that match a CSS selector
const allParagraphsInContainer = document.querySelectorAll("#container p");
console.log("Selected by querySelectorAll:", allParagraphsInContainer);


// Modifying Elements

// Changing content
// innerHTML: gets or sets the HTML content (including tags) of an element
mainHeading.innerHTML = "<i>Hello, DOM!</i>";

// textContent: gets or sets the text content of an element (no HTML tags)
introParagraphs[0].textContent = "This paragraph has been changed.";

// Changing styles
mainHeading.style.color = "red";
mainHeading.style.backgroundColor = "lightblue";

// Creating and Appending Elements

// createElement: creates a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

// appendChild: adds a new element as the last child of an element
container.appendChild(newParagraph);
