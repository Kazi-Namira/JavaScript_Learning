let arr1 = [7, 4, 6, 3];
let newarr1 = [];
for (let index = 0; index < arr1.length; index++) {
  const element = arr1[index];
  newarr1.push(element ** 2);
}
console.log(newarr1);

// or using map()

let arr2 = [7, 4, 6, 3];

let newarr2 = arr2.map((e) => {
  return e ** 2;
});

console.log(newarr2);

// filter()
const lessThanSeven = (e) => {
  if (e < 7) {
    return true;
  }
  return false;
};
console.log(arr1.filter(lessThanSeven));

// reduce()
const red = (a, b) => {
  return a + b;
};
console.log(arr2.reduce(red));

// Array.from()
let a = Array.from("Namira");
console.log(a);
