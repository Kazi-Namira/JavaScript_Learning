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
