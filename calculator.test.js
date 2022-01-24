const calculator = require("./calculator");

test("add positive whole numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("add positive decimal numbers", () => {
  expect(calculator.add(1.5, 2.02)).toBeCloseTo(3.52);
});

test("add negative mixed numbers", () => {
  expect(calculator.add(-1, -2.5)).toBeCloseTo(-3.5);
});

test("subtract positive whole numbers", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("subtract positive decimal numbers", () => {
  expect(calculator.subtract(5.5, 2.02)).toBeCloseTo(3.48);
});

test("subtract negative mixed numbers", () => {
  expect(calculator.subtract(-1, -2.5)).toBeCloseTo(1.5);
});

test("multiply positive whole numbers", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("multiply positive decimal numbers", () => {
  expect(calculator.multiply(5.5, 2.02)).toBeCloseTo(11.11);
});

test("multiply negative mixed numbers", () => {
  expect(calculator.multiply(-1, -2.5)).toBeCloseTo(2.5);
});

test("divide positive whole numbers", () => {
  expect(calculator.divide(2, 3)).toBeCloseTo(0.67);
});

test("divide positive decimal numbers", () => {
  expect(calculator.divide(5.5, 2.02)).toBeCloseTo(2.72);
});

test("divide negative mixed numbers", () => {
  expect(calculator.divide(-1, -2.5)).toBeCloseTo(0.4);
});
