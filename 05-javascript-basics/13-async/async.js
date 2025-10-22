// JavaScript is single-threaded, meaning it can only do one thing at a time.
// Asynchronous programming allows us to perform long-running tasks without blocking the main thread.

// 1. Callbacks
// A callback is a function passed as an argument to another function, which is then executed when the task is complete.
console.log("Start of callbacks example");

function fetchData(callback) {
  setTimeout(() => {
    const data = { message: "Data fetched successfully!" };
    callback(null, data); // First argument is for error, second for data
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Callback data:", data.message);
  }
});

console.log("End of callbacks example");
// Note: The "End" message logs before the data is fetched.

// "Callback Hell" or "Pyramid of Doom" is a common problem with callbacks,
// where you have nested callbacks for sequential asynchronous operations.

// 2. Promises
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
// A Promise can be in one of three states:
// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: the operation completed successfully.
// - rejected: the operation failed.

console.log("\nStart of Promises example");

function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate a successful operation
      if (success) {
        const data = { message: "Data fetched with a Promise!" };
        resolve(data);
      } else {
        reject("Failed to fetch data.");
      }
    }, 1500);
  });
}

fetchDataWithPromise()
  .then(data => {
    console.log("Promise .then():", data.message);
  })
  .catch(error => {
    console.error("Promise .catch():", error);
  })
  .finally(() => {
    console.log("Promise .finally(): This runs regardless of success or failure.");
  });

console.log("End of Promises example");

// 3. Async/Await (ES2017)
// Syntactic sugar on top of Promises, making asynchronous code look and behave more like synchronous code.
// 'async' makes a function return a Promise.
// 'await' makes a function wait for a Promise.

console.log("\nStart of Async/Await example");

async function processData() {
  try {
    console.log("Async/Await: Waiting for data...");
    const data = await fetchDataWithPromise(); // Pauses execution until the promise is settled
    console.log("Async/Await data:", data.message);
  } catch (error) {
    console.error("Async/Await error:", error);
  }
}

processData();

console.log("End of Async/Await example");

// --- Exercises ---

// 1. Create a function `simulateDownload` that returns a Promise. The promise should resolve after a 2-second delay (using `setTimeout`) with the message "Download complete!".
// 2. Consume the `simulateDownload` promise using `.then()` and `.catch()` to log the success message or any potential errors.
// 3. Create an `async` function `startDownload` that `await`s the result of the `simulateDownload` promise and logs the result to the console. Make sure to wrap it in a `try...catch` block.
// 4. Modify `simulateDownload` to randomly either resolve or reject the promise. You can use `Math.random() > 0.5` to decide. Handle the rejection in both the `.catch()` and the `try...catch` block.
