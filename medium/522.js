/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  function getAllSubsequences(str, idx = 0, subsequence = "", set = new Set()) {
    if (subsequence.length) set.add(subsequence);
    if (idx === str.length) return;

    // take letter at idx
    getAllSubsequences(str, idx + 1, subsequence + str[idx], set);

    // skip letter at idx
    getAllSubsequences(str, idx + 1, subsequence, set);

    return set;
  }

  const subsequences = strs.map((str) => getAllSubsequences(str));

  function isUncommon(subStr) {
    let count = 0;

    for (const set of subsequences) {
      if (set.has(subStr)) count++;
      if (count > 1) return false;
    }

    return count === 1;
  }

  let maxLength = -1;
  for (const set of subsequences)
    for (const subStr of set)
      if (subStr.length <= maxLength) continue;
      else if (isUncommon(subStr)) maxLength = subStr.length;
  return maxLength;
};

// idea: find all subsequences for each string
// check each subsequence to see if they are uncommon
// update our max length if they are uncommon

console.log(findLUSlength(["aba", "cdc", "eae"]));
