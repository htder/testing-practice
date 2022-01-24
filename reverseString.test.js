const reverseString = require("./reverseString.js");

test("single word", () => {
  expect(reverseString("hello")).toBe("olleh");
});
