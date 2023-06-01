// función llamada sumThreeNumbers que tome tres (3) números como parámetros y devuelva su suma.

function sumThreeNumbers (num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThreeNumbers(5,89,260));
// 354

// función llamada isStringOddOrEven que tome un (1) parámetro, una cadena de texto. La función debería devolver una cadena de texto con un mensaje describiendo si la cadena de texto recibida tiene un número par o impar de letras.

function isStringOddOrEven(city) {
  if (city.length % 2) {
    return `${city} has an odd number of letters.`;
  } else {
    return `${city} has an even number of letters.`;
  }
}

console.log(isStringOddOrEven("Barcelona"));
// Barcelona has an odd number of letters.