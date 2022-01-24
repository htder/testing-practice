const caesarCipher = require("./caesarCipher");

test("single word no punctuation, single shift", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("multiple words no punctuation, single shift", () => {
  expect(caesarCipher("abc def", 1)).toBe("bcd efg");
});

test("single word with punctuation, large shift", () => {
  expect(caesarCipher("it's", 7)).toBe("pa'z");
});

test("multiple words with punctuation, large shift", () => {
  expect(caesarCipher("it's a good day!", 12)).toBe("uf'e m saap pmk!");
});
