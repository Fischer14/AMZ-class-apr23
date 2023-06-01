console.log("Hello");

// Usa el objeto document para seleccionar el elemento <h1> del archivo HTML y cambia su texto a “Cat”.
let h1Cat = document.querySelector("h1");
h1Cat.textContent = "Cat";

// Usa el objeto document para seleccionar el elemento con la clase “mouse” y cambia su color de fondo a “gray”.
let mouseGray = document.querySelectorAll(".mouse");
mouseGray.textContent = "Fondo"
mouseGray.style.backgroundColor = "gray";

// Usa el objeto document para crear un nuevo elemento <p> y añádelo al elemento con el identificador cat.
let pCat = document.createElement("p");
pCat.innerHTML = "Hola DOM"

let addCat = document.querySelector("#cat")
addCat.appendChild(pCat)