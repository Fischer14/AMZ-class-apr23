//Funciones anónimas & Expresión de funciones
// Escribe una función anónima que tome dos argumentos, x y y, y devuelva la suma de los dos números. Asigna esta función a una variable llamada add.
const add = ((x, y) => {
    return x + y; 
})

// Escribe otra función anónima que tome dos argumentos, x y y, y devuelva el producto de los dos números. Asigna esta función a una variable llamada multiplicar.

const multiply = ((x, y) => {
    return x * y;
})

// Escribe una tercera función anónima que tome dos argumentos, x y y y devuelva el cociente de los dos números (x dividido por y). Asigna esta función a una variable llamada divide.

const divide = ((x, y) => {
    return x / y
}) 

// Función de Expresión 
// Crea una expresión de función llamada printMessage que, al ser invocada, imprima (devuelva) el mensaje “Soy una expresión de función” en la consola.

const printMessage = () => {
    return "Soy una expresión de función"
}

// Crea una función llamada useFuncExpression que toma como argumento una función callback y la ejecuta. Pasa la función printMessage como argumento. Cuando useFuncExpression es invocada debería registrar el mensaje “I am a function expression” en la consola.

function useFuncExpression (func) {
    return func();
}

console.log(useFuncExpression(printMessage));

// Bonus: intenta refactorizar useFuncExpression para usar funciones flecha y observa la diferencia.

const useFuncExpression = ((func) => {
    return func
})
console.log(useFuncExpression(printMessage));

// Callbacks
// Crea una función processArray que reciba un array y una función callback como parámetros. La función callback debe ser invocada en cada elemento del array y devolver un nuevo array con los resultados de la función callback.

// starter code

function processArray(arr, callback) {
    return arr.map (callback);
  }
  
  function addTwo(num) {
    return num + 2;
  }
  
  const nums = [1, 2, 3, 4];
  console.log(processArray(nums, addTwo));
  console.log(nums);
  
  