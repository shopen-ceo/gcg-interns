// npm (Node Package Manager) is the default package manager for Node.js.
// It is used to install, manage, and share packages (reusable code).

// To use an external package, you first need to initialize a Node.js project.
// Open your terminal in this directory and run the command: npm init -y
// This will create a 'package.json' file.

// Next, you need to install the package.
// In your terminal, run the command: npm install express
// This will install the 'express' package and add it to your 'package.json' file.

// Now you can use the 'express' package in your code.
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
