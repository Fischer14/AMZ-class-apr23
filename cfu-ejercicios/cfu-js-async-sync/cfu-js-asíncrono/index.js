// 1, Utilice la función setTimeout para mostrar un mensaje “¡Hello World!” después de 3 segundos.
setTimeout(() => {
    console.log("¡Hello World!");
}, 3000);

// 2. Utilice la función setInterval para mostrar un mensaje “Hello, every 3 seconds” cada 3 segundos. Detenga el intervalo después de 10 segundos usando clearInterval.
const greetingId = setInterval(() => {
    console.log("¡Hello, every 3 seconds");
}, 3000);

setTimeout(() => {
    clearInterval(greetingId);
}, 10000);

// 3. Crea una función llamada countdown que tome un número como argumento y use setInterval() para registrar el número en la consola, contando hacia atrás hasta cero.
// Utiliza el argumento proporcionado como duración de la cuenta atrás. Cada segundo, el número debe disminuir en 1 hasta llegar a cero.
// Cuando el temporizador llegue a cero, el intervalo debe ser borrado usando clearInterval() y debe mostrarse el mensaje “¡Time’s up!”.
// Debe comprobar si el valor proporcionado es numérico y si no lo es, la función debe devolver un mensaje de error: “Error: Not a number. Entrada inválida, por favor proporcione un valor numérico”. Sugerencia: Puede utilizar isNan() para comprobar si el valor proporcionado es numérico.
// Además, si el número proporcionado es menor que 1, la función debe devolver un mensaje de error “Error: Por favor, proporcione un número mayor que cero”.

let counter = 10;
const counterInterval = setInterval(() => {
    if(isNaN(counter)) {
        clearInterval(counterInterval);
        return console.log("Not a number");
    } else if (counter > 0) {
        console.log(counter);
    } else {
        clearInterval(counterInterval);
        console.log("Time's up!");
    } 
    counter--;
}, 1000);


let duration = 10;

countdown((duration) => {
    if(isNaN(duration)) {
        return console.log("Error: Not a number. Invalid input, please provide a numeric value.");
    }
    if (duration < 1) {
        return console.log("Error: Please provide a number greater than zero");
    }

    let timer = duration;

    const intervalId = setInterval(() => {
        console.log(timer);
        timer--;

        if(timer === 0) {
            clearInterval(intervalId);
            console.log("Time's up!");
        }
    }, 1000);    
})
console.log(countdown(duration));

