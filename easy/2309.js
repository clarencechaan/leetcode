/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let lowercase = new Set();
  let uppercase = new Set();

  for (const char of s)
    if (char >= "a" && char <= "z") lowercase.add(char);
    else uppercase.add(char);

  uppercase = [...uppercase].sort((a, b) => (a > b ? -1 : 1));

  for (const letter of uppercase)
    if (lowercase.has(letter.toLowerCase())) return letter;

  return "";
};

console.log(greatestLetter("AbCdEfGhIjK"));
