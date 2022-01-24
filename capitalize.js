function capitalize(words) {
  const firstLetter = words.split("")[0].toUpperCase();
  const rest = words.split("").slice(1).join("").toLowerCase();
  return firstLetter + rest;
}

module.exports = capitalize;
