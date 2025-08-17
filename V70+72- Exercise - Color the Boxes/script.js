// Given 5 boxes, Assign a random color and a random background to each box using DOM concepts
// Select all 5 boxes (for example, using getElementsByClassName or querySelectorAll).
// Loop through them (because you want to apply something to each box, not just one).
// For each box:
// Assign a random text color (the color of the text inside the box).
// Assign a random background color (the background of the box).

let boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
  // Generate random color for text
  let textColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Generate random background color
  let bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Apply the colors to the box
  boxes[i].style.color = textColor;
  boxes[i].style.backgroundColor = bgColor;
}

//  let textColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

// Creates a random hex color string for the text color.
// Math.random() → gives a random number between 0 and 1.
// Multiply by 16777215 → the highest decimal for a 6-digit hex color (FFFFFF).
// Math.floor(...) → rounds down to a whole number.
// .toString(16) → converts that number into hexadecimal (base 16).
// Adding "#" in front → makes it a valid CSS color like #3a9ef5.
