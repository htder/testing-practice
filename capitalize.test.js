const capitalize = require("./capitalize");

test("two lower case words", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("one lower case word", () => {
  expect(capitalize("world")).toBe("World");
});

test("already uppercase", () => {
  expect(capitalize("Apple")).toBe("Apple");
});

test("all uppercase", () => {
  expect(capitalize("PEAR")).toBe("Pear");
});

test("Single letter", () => {
  expect(capitalize("a")).toBe("A");
});
