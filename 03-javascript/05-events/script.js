// Events are actions that happen in the browser, such as a user clicking a button, resizing the window, or pressing a key.
// JavaScript can "listen" for these events and execute code when they occur.

// Select the button and the output div
const myButton = document.getElementById("my-button");
const outputDiv = document.getElementById("output");

// addEventListener is the recommended way to handle events in modern JavaScript.
// It takes two arguments: the event to listen for, and the function to run when the event occurs.
myButton.addEventListener("click", function() {
    // This function is called a "callback function" or "event handler".
    // It will be executed whenever the button is clicked.
    outputDiv.textContent = "Button was clicked!";
});

// You can also use a named function as the event handler.
function handleMouseOver() {
    myButton.style.backgroundColor = "lightgreen";
}

function handleMouseOut() {
    myButton.style.backgroundColor = ""; // Reset to default
}

myButton.addEventListener("mouseover", handleMouseOver);
myButton.addEventListener("mouseout", handleMouseOut);
