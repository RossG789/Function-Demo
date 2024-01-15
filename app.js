// function sayHelloto(name) {
//   console.log("Hello " + name + "!");
// }

// sayHelloto("Bob");
// sayHelloto("Andrew");
// sayHelloto("Sarah");

// function greet(greeting, name) {
//   console.log(greeting + " " + name + "!");
// }

// greet("Howdy", "Pardner");

function add(a, b) {
  return a + b;
}

// const result = add(20, 5);

// console.log("The result is", result);

// const anotherResult = add(30, 20);
// console.log("another result is", anotherResult);

function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function subtract(a, b) {
  return a - b;
}
function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else if (operator === "*") {
    return multiply(a * b);
  }
}

const result = calculate(5, 2, "+");
console.log("The result is", result);

const anotherResult = calculate(3, 4, "/");
console.log("Another result is", anotherResult);
