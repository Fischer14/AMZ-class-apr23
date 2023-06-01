// DOM Manipulation #6 - Creación de un evento click
// Agrega un escuchador de evento de clic al button con el id add-item-button.

let addItem = document.querySelector("#add-item-button");
let list = document.querySelector("#items-list");

let item = 1;

addItem.addEventListener("click", () => {
    let newList = document.createElement("li");
    newList.textContent = `Item number ${item}`;
    list.appendChild(newList);
    item++;
});
