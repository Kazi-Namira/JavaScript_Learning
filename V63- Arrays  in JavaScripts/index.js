let arr = [2, 3, 5, 7, 9];
// Index   0, 1, 2, 3, 4
console.log(arr);

console.log(`Length: ${arr.length}`);
// or
console.log("Length: " + arr.length);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// Store different data types in the same array
let a = ["Namira", 50, true];
console.log(a);

// Updating an array element by index  "Changing value"
let b = [10, 20, 30, 40, 50];
b[1] = 1;
console.log(b);

// check the data type
let c = ["Meyheg", 3, true];
console.log(typeof c);
console.log(typeof c[0]);
console.log(typeof c[1]);
console.log(typeof c[2]);

console.log(c.toString());    
// Output: Meyheg,3,true

console.log(c.join(" and "));
// Output: Meyheg and 3 and true

console.log(c.join(" - "));
// Output: Meyheg - 3 - true


// pop and push
c.pop();
console.log(c);

c.push(7);
console.log(c);

c.push("Hello");
console.log(c);

// shift and unshift
c.shift();
console.log(c);

c.unshift("AddAt1st");
console.log(c);

// delete()
let d = [10, 20, 50, 100];
delete d[2];
console.log(d);

// Concat()
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
console.log(a1.concat(a2, a3));

// sort()
let e = [7, 3, 6, 1, 2];
console.log(e.sort());

// splice()
console.log(e.splice(1, 2));
console.log(e.splice(1, 4));
console.log(e.splice(1, 2, 222, 333));
console.log(e);

// slice()
let f = [0, 1, 2, 3, 4, 5];
console.log(f.slice(2, 4));

// reverse()
console.log(f.reverse());

