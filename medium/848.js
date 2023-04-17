/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  for (let i = shifts.length - 2; i >= 0; i--) shifts[i] += shifts[i + 1];
  for (let i = 0; i < shifts.length; i++) shifts[i] = shifts[i] % 26;

  let result = s.split("");
  for (let i = 0; i < result.length; i++)
    result[i] = String.fromCharCode(
      ((result[i].charCodeAt() - 97 + shifts[i]) % 26) + 97
    );
  return result.join("");
};

console.log(shiftingLetters("aaa", [1, 2, 3]));
