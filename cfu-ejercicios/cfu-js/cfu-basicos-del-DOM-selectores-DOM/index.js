console.log("Hello");

// Usa el objeto document para seleccionar todos los elementos con la clase “box” y cambia su color de fondo a “purple”.

let div = document.getElementsByClassName("box")

for (let i = 0; i < div.length; i++) {
    div[1].style.backgroundColor = "purpule"; 
}

// Usa el objeto document para seleccionar todos los elementos con el nombre de etiqueta “p” y cambia su tamaño de fuente a “20px”.

let p = document.getElementsByTagName("p")

for (let i = 0; i < p.length; i++) {
    p[1].style.fontSize = "20px"; 
}

// Usa el objeto document para crear un nuevo elemento <h2> con el texto “Hola Mundo” y añádelo al cuerpo del documento HTML.

let h2 = document.createElement("h2")

h2.innerHTML = "Hola Mundo"
document.body.appendChild(h2)
