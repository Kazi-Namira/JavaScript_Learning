let a = [1, 3, 5, 7, 9];

// for loop
for (let i = 0; i < a.length; i++) {
  const element = a[i];
  console.log(element);
}

// foreach loop
a.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

// for..in loop
let obj = {
  a: "Namira",
  b: "Meyheg",
  c: "Sanam",
};

// let obj = [1, 2, 3]; or

for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element);
  }
}

// for..of loop
let b = [9, 5, 3];
for (const element of b) {
  console.log(element);
}
