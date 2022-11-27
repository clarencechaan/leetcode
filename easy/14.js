/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longest = "";
  const first = strs[0];
  for (let i = 0; i < first.length; i++)
    if (strs.every((word) => word[i] === first[i])) longest += first[i];
    else break;
  return longest;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
