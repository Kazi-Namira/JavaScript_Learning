console.log("Hellllloooo");
let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red";

// document.getElementById("redbox").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "green";

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "green";
});

//  getElementById() → when you need to select a single element with a unique ID.

//  getElementsByClassName() → to select all elements with a specific class.

//  getElementsByTagName() → to select all elements of a particular tag.

//  querySelector() → for selecting the first element that matches a CSS selector.

//  querySelectorAll() → to select all elements that match a CSS selector.
