// DOM Manipulation #1 - Estableciendo atributos de elementos
// Usa el objeto document para seleccionar el elemento a con el id “google-link” y establece su atributo href en “http://www.google.com”.

let googleLink = document.querySelector("#google-link");
googleLink.href = "http://www.google.com";

// Manipulación del DOM #2 - Creación del atributo de un nuevo elemento
// Continúa utilizando el HTML proporcionado en el ejercicio anterior. Esta vez, tu tarea es acceder al mismo elemento a y actualizar su atributo target. Establece el valor del atributo target en "_blank" para abrir la nueva página en una nueva pestaña de tu navegador cuando se haga clic en el enlace.

googleLink.target = "_blank";

// Manipulación DOM #3 - Eliminar el atributo de un elemento existente
// Dado el código HTML proporcionado, ¿cómo eliminaría el atributo class del elemento <p>?

let paragraph = document.querySelector("p");
paragraph.removeAttribute("class");

