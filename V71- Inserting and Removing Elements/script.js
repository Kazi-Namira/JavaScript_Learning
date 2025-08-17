// 1. innerHTML & outerHTML
let div = document.getElementById("myDiv");
div.innerHTML = "<p>Hello!</p>"; // changes only the inside content
div.outerHTML = "<h1>Replaced Div</h1>"; // replaces the whole element and its content
// innerHTML → changes inside content.
// outerHTML → changes the whole element, including itself.

// 2. Inserting elements
element.insertAdjacentHTML("beforebegin", "<p>Before element</p>");
element.insertAdjacentElement("afterend", newDiv);
element.insertAdjacentText("afterbegin", "Hello Text");
// beforebegin → before the element itself
// afterbegin → inside element, at start
// beforeend → inside element, at end
// afterend → after the element itself

// 3. Creating & Adding elements
let newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv); // add it to the page
// createElement → makes a new element in memory.
// appendChild → puts it on the page.

// 4. Removing elements
let element = document.getElementById("myDiv");
element.parentNode.removeChild(element);
// removeChild → removes the element from the page.
// The element must exist in HTML or it will throw an error.

// 5. Event Handling (Interact)
let btn = document.getElementById("addBtn");
btn.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  newDiv.textContent = "Hello World!";
  document.body.appendChild(newDiv);
});
// addEventListener → runs code when a button is clicked.
// Every click creates a new div and adds it to the page.

//  :::::::: Summary of Key Concepts ::::::::

// Create → Add → Remove → Interact

// innerHTML → changes inside content

// outerHTML → changes entire element

// insertAdjacent… → adds content at specific positions

// insertBefore → adds a new element before another element.

// beforebegin → before the element itself

// afterbegin → inside element, at start

// beforeend → inside element, at end

// afterend → after the element itself

// Add → appendChild → put it on the page.

// Remove → removeChild → take it off the page.

// Interact → addEventListener → make buttons do things.
