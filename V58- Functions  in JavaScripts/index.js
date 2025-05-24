function ques(Name) {
  console.log("Hey " + Name + " how are you?");
  // console.log("Hey " + Name + " how are you?");
  // console.log("Hey " + Name + " how are you?");
  // console.log("Hey " + Name + " how are you?");
}

ques("Namira");
ques("Sanam");

function sum(a, b) {
  return a + b;
}

// c=sum(10,12);
// console.log(c);

result1 = sum(5, 7);
result2 = sum(6, 7);
result3 = sum(7, 7);

console.log("The sum of the numbers is = ", result1);
console.log("The sum of the numbers is = ", result2);
console.log("The sum of the numbers is = ", result3);

// arrow function
const func1 = (x) => {
  console.log("I have " + x + " taka");
};

func1(1000);
func1(20000);
