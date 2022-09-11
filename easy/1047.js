/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let result = s;
  for (let i = 0; i < result.length; i++) {
    if (
      result[i] != undefined &&
      result[i + 1] != undefined &&
      result[i] === result[i + 1]
    ) {
      result = result.substring(0, i) + result.substring(i + 2);
      i = i - 2;
    }
  }
  return result;
};

console.log(removeDuplicates("aaaaaaaa"));
