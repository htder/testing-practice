const calculator = {
  add: (add = (x, y) => {
    return x + y;
  }),
  subtract: (subtract = (x, y) => {
    return x - y;
  }),
  multiply: (multiply = (x, y) => {
    return x * y;
  }),
  divide: (divide = (x, y) => {
    return x / y;
  }),
};

module.exports = calculator;
