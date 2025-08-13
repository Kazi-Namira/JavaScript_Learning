let a = "Namira";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]); /*Extra*/

// Concatenation
let a = "Namira";
let b = "Meyheg";

console.log("Her full name is " + a + " " + b);
// or
console.log(`Her full name is ${a} ${b}`);

console.log(a + b);

// Escape sequence
let name1 = "Namira\nSanam";
let name2 = "Namira\tSanam";
let name3 = "Namira\rSanam";

console.log("name1 : ", name1);
console.log("name2 : ", name2);
console.log("name3 : ", name3);

// String properties methods:

let d = " Namira Meyheg";

console.log(d.length);
console.log(d.toUpperCase());
console.log(d.toLowerCase());
console.log(d.slice(2, 5));
console.log(d.slice(2));
console.log(d.trim());
console.log(d.indexOf());

console.log(d.replace("Meyheg", "Sanam"));

let newd = d.replace("Meyheg", "Sanam");
console.log(newd);

let name4 = "Namira";
let name5 = "Meyheg";
console.log(name4 + " " + name5 + " Sanam");
console.log(name4.concat(" ", name5, " ", "Sanam"));
