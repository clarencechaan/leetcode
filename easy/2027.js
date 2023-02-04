/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++)
    if (s[i] === "X") {
      i += 2;
      result++;
    }

  return result;
};

console.log(minimumMoves("OXOX"));
