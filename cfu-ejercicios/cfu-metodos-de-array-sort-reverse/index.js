// Ordenar cadenas
// Utilizando la siguiente matriz de cadenas, realice las tareas que se indican a continuación:
const arrOfStrings = ["cat", "wolf", "is", "animal"];
console.log(arrOfStrings);

// Crea una copia del arreglo arrOfStrings y nómbrala strings1.
const strings1 = [...arrOfStrings];

// Ordena el arreglo strings1 desde la cadena más corta hasta la más larga.
strings1.sort((a, b) => {
    return a.length - b.length;
});
console.log(strings1);

// Crea otra copia del arreglo arrOfStrings y nómbrala strings2.
const strings2 = [...arrOfStrings];

// Ordena el arreglo strings2 alfabéticamente.
strings2.sort();
console.log(strings2);

// Sort numbers
// Crea una función llamada sortNumbers que tome un arreglo de números como argumento. La función debería devolver un nuevo arreglo que sea una copia del arreglo original, conteniendo los mismos números en orden ascendente.
const numbers = [2, 5, 9, 7, 1, 8, 4, 3, 6];

const sortNumbers = ((array) => {
    const copy = array.slice ()
    copy.sort ((a, b) => a - b)
    return copy;
});
console.log(sortNumbers(numbers));

// Reverse strings
// Invierta la cadena name proporcionada a continuación y console.log su valor después de haber sido invertida.

const name = "ivan";
const reverse = name.split(" ").reverse().join("");

console.log(reverse);

// Reverse numbers
// Usando la siguiente matriz de cadenas de texto, realiza las tareas que se enumeran a continuación:
const number = [3, 5, 6, 2];

// Copia y revierte el arreglo numbers.
const numReverse = number.slice().reverse();
console.log(numReverse);

// Copia y ordena el arreglo numbers y luego reviértelo.
const sortedAndReversed = number.slice().sort().reverse();
console.log(sortedAndReversed);