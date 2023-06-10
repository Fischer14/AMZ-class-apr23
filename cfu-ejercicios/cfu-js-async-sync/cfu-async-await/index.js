// Using async/await #1
// Crea una función asíncrona llamada getData que toma una URL como parámetro. Usa el método fetch() dentro de la función para hacer una petición GET a la URL especificada y devolver los datos JSON desde el servidor.
// Modifica la función getData para incluir la gestión de errores. Si hay un error, debería lanzar un mensaje de error “Failed to fetch data”.
// Llama a la función getData y pásale la siguiente URL: https://jsonplaceholder.typicode.com/posts y utiliza console.log() para registrar los datos devueltos en la consola.

const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("data: ", data);
    } catch (err) {
      console.log("Error request, unrecognized URL");
    }
  };
  
  console.log(getData("https://jsonplaceholder.typicode.com/posts"));
  
//   Using async/await #2
//   En este ejercicio, trabajarás con la función fetch() para mostrar datos de un servidor en una página web usando async/await.
  
//   Define una función llamada displayData. Dentro de esta función, usa la palabra clave await para hacer una petición al servidor en la URL https://jsonplaceholder.typicode.com/posts usando el método fetch().
//   Después de que la petición tenga éxito, el servidor responderá con datos. Necesitamos parsear estos datos en un formato que JavaScript pueda entender (JSON) usando la palabra clave await en el método response.json().
//   Después de analizar los datos, utilice JavaScript para crear nuevos elementos HTML, uno para cada entrada, y añada el título y el cuerpo de la entrada a cada elemento. Añada estos nuevos elementos a un elemento existente en la página (un div con el id “posts”).
//   Si la petición encuentra un error, utiliza un bloque try-catch para gestionarlo y mostrar un mensaje de error en la página (por ejemplo, “Failed to fetch data”).
//   Finalmente, llama a la función displayData para ejecutar el código y recuperar los datos del servidor y mostrarlos en la página.


  const displayData = async () => {
    try {
      const dataRequest = await fetch(
        "https://jsonplaceholder.typicode.com/poss"
      );
      const dataClean = await dataRequest.json();
      const parentElement = document.querySelector("#posts");
      dataClean.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        parentElement.appendChild(postElement);
      });
    } catch (err) {
      console.log("Error: ", Error);
      const errorTag = document.createElement("p");
      errorTag.innerText = "Failed to fetch data";
      document.body.appendChild(errorTag);
    }
  };
  
  displayData();