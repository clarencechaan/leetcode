/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let result = [];
  for (const char of s)
    if (char === "i") result.reverse();
    else result.push(char);
  return result.join("");
};

console.log(finalString("string"));
