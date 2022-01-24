const reverseString = require("./reverseString");

test("single word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("multiple words", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("single letter", () => {
  expect(reverseString("h")).toBe("h");
});

test("multiple words with punctuation", () => {
  expect(reverseString("What's the time?")).toBe("?emit eht s'tahW");
});
