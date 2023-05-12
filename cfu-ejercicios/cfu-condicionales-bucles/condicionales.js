// Saludo Personalizado - “Hello World”

// const language = prompt ("Please choose your language - (options: Spanish, French, English):")
// const name = prompt("Please enter your name");

// if (language === "Spanish") {
//     console.log("Hola, ${name}");
// } else if (language === "French"){
//     console.log("Salut, ${name}")
// } else if (language === "English"){
//     console.log("Hello, ${name}")
// } else {
//     console.log("I'm not suer what language that is.")
// }



// const name = prompt("Please enter your name");
// const language = prompt("Please choose your language - (options: Spanish, French, English):")

// switch (language) {
//     case "Spanish":
//         console.log("Hola, ${name}!");
//         break;
//     case "French":
//         console.log("Salut, ${name}");
//         break;
//     case "English":
//         console.log("Hello, ${name}!");
//         break;
//     default:
//     console.log("I'm not suer what language that is.")
// }

// const name = prompt("Which character of Game of Thornes is your favorite?")

// let house = "";
// switch (name) {
//     case "Daenerys":
//         house = "Targaryen";
//         break;
//     case "Jon Snow":
//     case "Sansa":
//     case "Arya":
//         house = "Stark";
//         break;
//     case "Tyrion":
//     case "Cersei":
//         house = "Lannister";
//         break;    
// }

// console.log("Your favorite character is from the house ${house}.");

// Bucles e Iteraciones #1

// let i = 0;
// while (i <= 30) {
//   console.log(i);
//   i++; 
// }

// let i = 0;
// while (i <= 30) {
//     i++;  
//     if (i === 10) {
//         console.log("ten");
//       } else if (i === 20) {
//         console.log("twenty");
//       } else if (i === 30) {
//         console.log("thirty");
//       } else {
//         console.log(i)
//       }
//     }

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }