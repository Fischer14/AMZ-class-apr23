// Fetch #1
// En este ejercicio, trabajarás con la función fetch() para solicitar datos de la API JSONPlaceholder.

// Crea una función llamada getTodos que utilice la API fetch para realizar una petición GET al endpoint de la API JSONPlaceholder https://jsonplaceholder.typicode.com/todos.
// Manejar la respuesta del servidor analizándola en JSON y devolviendo los datos analizados. Si hay un error en la petición, lanza un mensaje de error “Failed to get todos data”.
// Usa la función getTodos para obtener todos los todos y registra la respuesta en la consola.
// Añade un tratamiento de errores a la función getTodos para capturar cualquier error que ocurra durante la petición y registrarlo en la consola con el mensaje de error “Failed to get todos data”.

const getTodos = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        if(!response.ok) {
            throw Error("Fallo");
        } return response.json();
    })
    .catch((err) => {
        console.log(err.message);
    });
}

getTodos()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err.message);
});

// Fetch #2
// En este ejercicio, trabajarás con la función fetch() para mostrar datos de un servidor en una página web.

// Define una función llamada displayData. Dentro de esta función, utiliza el método fetch() para hacer una petición al servidor en la URL https://jsonplaceholder.typicode.com/posts.
// Después de que la petición tenga éxito, el servidor responderá con datos.
// Necesitamos parsear estos datos en un formato que JavaScript pueda entender (JSON).
// Después de analizar los datos, utilice JavaScript para crear nuevos elementos HTML, uno para cada entrada, y añada el título y el cuerpo de la entrada a cada elemento. Añade estos nuevos elementos a un elemento existente en la página (un div con el id “posts”).
// Si la solicitud encuentra un error, muestre un mensaje de error en la página (por ejemplo, “Failed to fetch data”).
// Finalmente, llama a la función displayData para ejecutar el código y recuperar los datos del servidor y mostrarlos en la página.

const displayData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
        const parentElement = document.getElementById("posts");
        data.forEach((post) => {
            const postEl = document.createElement("div");
            post.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
            parentElement.appendChild(postEl);
        });
    })
    .catch((error) => {
        console.log("Error: ", error);
        const errorMessage = document.createElement("p");
        errorMessage.innerText = "Failed to fetch data";
        document.body.appendChild(errorMessage);
    });
}

displayData();
