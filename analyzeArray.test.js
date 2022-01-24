const analyzeArray = require("./analyzeArray");

test("positive numbers", () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test("negative numbers", () => {
  expect(analyzeArray([1, -2, -3, 4])).toEqual({
    average: 0,
    min: -3,
    max: 4,
    length: 4,
  });
});
