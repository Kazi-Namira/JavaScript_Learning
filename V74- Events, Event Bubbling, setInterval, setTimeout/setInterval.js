// Store the setInterval in a variable
let timer = setInterval(() => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(timer);
  console.log("Stopped!");
}, 5000);

// How It Works
// setInterval() → Starts changing the background color every 1 second.
// let timer = ... → We store the interval ID in a variable.
// setTimeout() → Waits 5 seconds.
// clearInterval(timer) → Stops the color-changing process after 5 seconds.
// console.log("Stopped!") → Shows a message in the console.
