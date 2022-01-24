function analyzeArray(numbers) {
  const average =
    numbers.reduce((prev, curr) => prev + curr, 0) / numbers.length;
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const length = numbers.length;
  return {
    average,
    max,
    min,
    length,
  };
}
module.exports = analyzeArray;
