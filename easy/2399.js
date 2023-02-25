/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  let letters = new Set();
  for (const char of s) letters.add(char);

  let distances = {};
  for (const letter of letters) {
    let start = s.indexOf(letter);
    let end = s.substring(start + 1).indexOf(letter) + start;
    distances[letter] = end - start;
  }

  for (const letter in distances) {
    const idx = letter.charCodeAt() - 97;
    if (distance[idx] !== distances[letter]) return false;
  }

  return true;
};

console.log(
  checkDistances(
    "abaccb",
    [
      1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
