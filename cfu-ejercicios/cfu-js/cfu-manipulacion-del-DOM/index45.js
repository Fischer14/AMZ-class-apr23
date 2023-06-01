// DOM Manipulación #4 - Creación de un nodo de texto
// Crea dos nodos en tu archivo de JavaScript:
// Un elemento p.
let p = document.createElement("p");

// Un nodo de texto, con el valor de texto “Hi there! I am using JavaScript” ("¡Hola! Estoy usando JavaScript").
let textNode = document.createTextNode("¡Hola! Estoy usando JavaScript");

// Agrega el nodo de texto al elemento p y luego agrega el elemento p al DOM para que se muestre en la página.
p.appendChild(textNode);
document.body.appendChild(p);

// Manipulación del DOM #5 - Insertar un nodo
// Dado el código HTML proporcionado, ¿cómo insertaría un elemento input antes del button con el id “add-item-button”?
let button = document.getElementById("add-item-button");

let addItem = document.createElement("input");

addItem.setAttribute("type", "text");
addItem.setAttribute("placeholder", "Enter Item");

let parent = button.parentNode;
parent.insertBefore(addItem, button);

