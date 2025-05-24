console.log("Hey!I am Namira");

let a = 5;
let b = 6;
let c = "Namira";
var _a = "Sanam";
// var 35a = "Kazi";  Not Allowed

console.log(a);
console.log(b);
console.log(c);
console.log(_a);

console.log(a + b + 10);
console.log(a - b);

console.log(typeof a, typeof b, typeof c);

// const a1= 33;
// a1 = a1 + 10; Not Allowed, because a1 is constant.

let x = "Kazi Namira";
let y = 10;
let z = 3.35;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);


//JS objects
let m = {
  name: "Meyheg", // "name": "Meyheg",
  job_code: 3,
  "is active": true,
};

console.log(m);

// JavaScript objects are flexible — we can add, update, or delete properties at any time.

// adds a new property
m.salary = "30000cr";
console.log(m);

// updates the existing property
m.salary = "50000cr";
console.log(m);

// delete a existing property
delete m.salary;
console.log(m);


