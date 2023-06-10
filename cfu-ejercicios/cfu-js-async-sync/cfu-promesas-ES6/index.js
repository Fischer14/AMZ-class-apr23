// Promesas #1
//Crea una función llamada getWeather que tome una city como cadena y devuelva una promesa que se resuelva con un mensaje que contenga la ciudad y la temperatura actual al cabo de 2 segundos.
// Si la ciudad no es “Madrid”, “Barcelona”, “París” o “Berlín” la promesa debe rechazar con un mensaje de error “Ciudad no encontrada”.

const cityWeather = {
    Madrid: 20,
    Barcelona: 22,
    Paris: 18,
    Berlin: 15,
  };
  
  const getWeather = ((city) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!cityWeather[city]) {
                reject("Ciudad no disponible.");
            } else {
                resolve(`The current temperature in ${city} -- ${cityWeather[city]} ºC`);
            }
        }, 2000);
    });
  });

  getWeather("Madrid")
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));

    getWeather("Lisboa")
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));
  
// Promesas #2
// Crea una función llamada delayedLog que toma como argumento time (número) y una cadena message. La función devuelve una promesa que después de time segundos, registrará el message en la consola. Si el tiempo es menor que 0, la promesa será rechazada con el mensaje de error “Error: Tiempo no válido”.

// Escribe la función delayedLog que devuelve una promesa. Utiliza la función setTimeout para registrar el mensaje después del tiempo proporcionado.
// Añade un tratamiento de errores en la función para comprobar si el tiempo proporcionado es menor que 0. Si lo es, rechaza la promesa con el mensaje de error “Error: Tiempo no válido”.
// Utilice la función delayedLog para registrar el mensaje “Hola” después de 2 segundos, y “Mundo” después de 3 segundos.

const delayedLog = (time, message, delay) => {
    return new Promise((resolve, reject) => {
      if (time < 0) {
        reject("Error: Invalid time");
      } else {
        setTimeout(() => {
          resolve(
            console.log(`${time} seconds later ${message}`)
          );
        }, delay);
      }
    });
  };
  
  delayedLog(2, "hola", 1000)
    .then(() => delayedLog(3, "world", 1000))
    .then(() => delayedLog(4, "Bye", 1000))
    .then(() => delayedLog(5, "World", 1000))
    .catch(() => console.log(error));
    
// Promesas #3
// En este ejercicio, tienes que crear una función sumTwoNumbers que tome 3 números (num1, num2, delayInMilliseconds) y después de cierta cantidad de segundos devuelva la suma de los 2 primeros números introducidos. El tercer número representa milisegundos - cuánto tiempo queremos que esta función espere antes de ejecutarse. Si la entrada no es válida, la promesa debe rechazar con el mensaje de error “Entrada no válida”.

// Crea una función sumaDosNúmeros que reciba 3 números como argumentos. La función debe devolver una promesa que después de una cierta cantidad de segundos (proporcionados por el usuario) devolverá la suma de los 2 números.
// Añadir tratamiento de errores en la función para comprobar si la entrada proporcionada es válida (numérica). Si la entrada no es válida, rechazar la promesa con el mensaje de error “Entrada no válida”.
// Usa la función sumTwoNumbers para obtener la suma de 5 y 10. Registra la suma en la consola.

const sumTwoNumbers = (num1, num2, delay) => {
    return new Promise((resolve, reject) => {
      if (isNaN(num1) || isNaN(num2)) {
        reject(console.log("Invalid Input"));
      } else {
        setTimeout(() => {
          let sum = num1 + num2;
          resolve(`${sum}`);
        }, delay);
      }
    });
  };
  
  sumTwoNumbers(10, 2, 10000).then((sum) => console.log(sum));

  