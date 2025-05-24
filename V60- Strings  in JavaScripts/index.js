let a = "Namira";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]); /*Extra*/

// Concatenation
let b = "Meyheg";

console.log("Her full name is " + a + " " + b);

console.log(a + b);

console.log(`Her full name is ${a} ${b}`);

// Escape sequence
let name = "Namira\nSanam";
let name = "Namira\tSanam";
let name = "Namira\rSanam";

console.log(name);

// String properties methods:

let d = " Namira Meyheg";

console.log(d.length);
console.log(d.toUpperCase());
console.log(d.toLowerCase());
console.log(d.slice(2, 5));
console.log(d.slice(2));
console.log(d.trim());

console.log(d.replace("Meyheg", "Sanam"));

let newd = d.replace("Meyheg", "Sanam");
console.log(newd);

let name1 = "Namira";
let name2 = "Meyheg";
console.log(name1 + " " + name2 + " Sanam");
console.log(name1.concat(" ", name2, " ", "Sanam"));
console.log(d.indexOf());
