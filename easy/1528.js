/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let result = [];
  for (let i = 0; i < indices.length; i++) result[indices[i]] = s[i];
  result = result.join("");

  return result;
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
