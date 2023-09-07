function capitalize(input) {
  return input[0].toUpperCase() + input.slice(1);
}

function reverseString(input) {
  return input.split("").reverse().join("");
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function caesarCipher(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (/[a-zA-Z]/.test(char)) {
      const isUpperCase = char === char.toUpperCase();

      char = char.toUpperCase();

      const charCode = char.charCodeAt(0);
      const shiftedCharCode = ((((charCode - 65 + shift) % 26) + 26) % 26) + 65;

      char = isUpperCase
        ? String.fromCharCode(shiftedCharCode)
        : String.fromCharCode(shiftedCharCode).toLowerCase();
    }

    result += char;
  }

  return result;
}

function analyzeArray(array) {
  return {
    average: () => array.reduce((a, b) => a + b, 0) / array.length,
    minimum: () => Math.min(...array),
    maximum: () => Math.max(...array),
    theLength: () => array.length,
  };
}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
