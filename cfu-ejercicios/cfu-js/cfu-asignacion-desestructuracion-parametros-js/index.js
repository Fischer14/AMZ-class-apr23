// Dado el siguiente objeto data, utiliza la destructuración de objetos para acceder al nombre y apellido del estudiante, su club de fútbol favorito, así como la ciudad y el país de donde proviene este estudiante. Imprime los valores en la consola en el siguiente formato: “Student <firstName> <lastName> from <city> (<country>) loves <favoriteFootballTeam>.” (“El estudiante <firstName> <lastName> de <city> (<country>) ama al equipo <favoriteFootballTeam>.”).

const data = {
    name: {
      firstName: "ana",
      lastName: "marino",
    },
    isStudent: true,
    favoriteFootballTeam: "fc barcelona",
    hometown: {
      city: "buenos aires",
      country: "argentina",
    },
  };

  let { name: {firstName, lastName}, isStudent, favoriteFootballTeam, hometown: {city, country},} = data;
console.log(`Student ${firstName} ${lastName} from ${city}, ${country} loves ${favoriteFootballTeam}.`);

// Desestructurar arrays
// ¿Cuáles serían los resultados esperados y por qué?

// const [a, b] = [1, 10];

// console.log(a * b); // 10

const [a, b = 1] = [2];

console.log(a * b); // <== 2

// Desestructuración de parámetros de función
// Crea una función getIngredients() que tome como parámetro un objeto con la siguiente estructura:


const greenSmoothie = {
  leaf: "spinach",
  veggie: "bok choy",
  seed: "ground flex seeds",
  nut: "peanut",
  liquid: "almond milk",
};

let getIngredients = ({ leaf, veggies, seed, nut, liquid }) => {
     console.log(`To make a smoothie, you should add: ${leaf}, ${veggies}, ${seed}, ${nut}, ${liquid}.`);
};

getIngredients(greenSmoothie);