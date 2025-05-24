// fac=n*(n-1)!

// method 1
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(6));

// method 2
let n = 6;
let fac = 1;

for (let i = 1; i <= n; i++) {
  fac *= i;
}

console.log(fac);
