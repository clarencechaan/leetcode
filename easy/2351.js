/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let seen = [];
  for (const char of s) {
    if (seen.includes(char)) return char;
    seen.push(char);
  }
};

console.log(repeatedCharacter("abcdd"));
