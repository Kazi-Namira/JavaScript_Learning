function faultyCalculator() {
  let num1 = +prompt("Enter first number:");
  let num2 = +prompt("Enter second number:");
  let op = prompt("Enter operator (+, -, *, /):");

  // 10% chance to do wrong operation
  let faulty = Math.random() < 0.1;

  if (faulty) {
    if (op === "+") alert(num1 - num2);
    else if (op === "*") alert(num1 + num2);
    else if (op === "-") alert(num1 / num2);
    else if (op === "/") alert(num1 ** num2);
    else alert("Invalid operator!");
  } else {
    if (op === "+") alert(num1 + num2);
    else if (op === "-") alert(num1 - num2);
    else if (op === "*") alert(num1 * num2);
    else if (op === "/") alert(num1 / num2);
    else alert("Invalid operator!");
  }
}

faultyCalculator();