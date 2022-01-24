function caesarCipher(words, shift) {
  const convertedLetters = converToNumbers(words.split(""));
  const shifted = shiftNumbers(convertedLetters, shift);
  const checkShifted = greaterThanAlphabet(shifted);
  return numbersToString(checkShifted).join("");
}

function converToNumbers(letters) {
  return letters.map((value) =>
    !/[ _.,!"'/$]/.test(value) ? parseInt(value, 36) - 9 : value
  );
}

function shiftNumbers(numbers, shift) {
  return numbers.map((value) =>
    !/[ _.,!"'/$]/.test(value) ? +value + shift : value
  );
}

function greaterThanAlphabet(numbers) {
  return numbers.map((value) =>
    !/[ _.,!"'/$]/.test(value) ? (value > 26 ? value - 26 : value) : value
  );
}

function numbersToString(numbers) {
  return numbers.map((value) =>
    !/[ _.,!"'/$]/.test(value) ? (value + 9).toString(36) : value
  );
}

module.exports = caesarCipher;
