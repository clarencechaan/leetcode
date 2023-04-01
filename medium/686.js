/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  let count = 1;
  let repeatedA = a;
  while (repeatedA.length < b.length * 4 || count < 4) {
    if (repeatedA.includes(b)) return count;
    repeatedA += a;
    count++;
  }
  return -1;
};

console.log(repeatedStringMatch("aaaaaaaaaaaaaaaaaaaaaab", "ba"));
