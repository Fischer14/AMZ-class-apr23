// Ejercicio 1

// you can use console.log() method below each of the expressions to check if your calculation was correct

// const expressionOne = ((2 * 2) + 5) * 6;

// const expressionTwo = ((2* 2) + (5 * 3)) - 5;

// const expressionThree = (5 * 5) / (5 * 5);

// const expressionFour = 5 * 5 - 5 * 4;

// console.log(expressionOne);
// console.log(expressionTwo);
// console.log(expressionThree);
// console.log(expressionFour);

// Ejercicio 2

// const dessert = "My favorite dessert is jello."
// console.log(dessert.indexOf("j"));

// Ejercicio 3

const name = "Romy";
const surname = "Fischer";
const age = "27";

const nameInCaps = name.charAt(0).toUpperCase() + name.substring (1);
console.log(nameInCaps);

let surnameInCaps = surname.charAt(0).toUpperCase() + surname.substring(1);
console.log(surnameInCaps);

let fullName = `${nameInCaps} ${surnameInCaps}`
console.log(fullName);

console.log(`My name is ${fullName} and I am ${age}.`)
