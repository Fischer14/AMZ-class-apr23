// Uso de escuchadores de eventos #1

let button = document.querySelector("#my-button");
button.addEventListener("mouseover", () => {
    console.log("Button clicked!");
});

//Uso de escuchadores de eventos #2

let div = document.querySelector("#color-change");
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "light blue"
});


