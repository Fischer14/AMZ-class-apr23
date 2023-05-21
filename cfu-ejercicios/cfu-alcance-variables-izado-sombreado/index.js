// Declara una variable global x y asígnale el valor de 10.
let x = 10;
console.log(x);

// Declara una función myFunction y dentro de ella, declara una variable local y y asígnale el valor de 5.
function myFunction() {
  console.log(x);
  let y = 5;
  console.log(y);
}
// Imprime en la consola el valor de las 4. variables x e y dentro de la función.
myFunction();

// Imprime en la consola el valor de las variables x e y fuera de la función en el ámbito global.
console.log(x);

// Declara un bloque simple usando {} y dentro de él, declara una variable de ámbito de bloque x y asígnale el valor de 2.
{
  let x = 2;
  console.log(x);
}

// Imprime en la consola el valor de x dentro del bloque y fuera de él.
console.log(x);

// Escribe un párrafo explicando lo que has aprendido de los pasos anteriores.

