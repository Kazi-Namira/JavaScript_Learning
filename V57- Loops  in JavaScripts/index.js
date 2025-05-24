// for Loop
let a = 1;
for (let i = 0; i < 100; i++) {
  console.log(a + i);
}

// for-in loop
const a = {
  name: "Namira",
  id: "C231450",
  section: "4B",
};

for (const key in a) {
  const element = a[key];
  console.log(key, element);
}


// for-of
for (const c of "Namira") {
  console.log(c);
}

// while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do..while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);
