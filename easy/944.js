/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  function isSorted(idx) {
    for (let i = 1; i < strs.length; i++)
      if (strs[i][idx] < strs[i - 1][idx]) return false;
    return true;
  }

  let deleted = 0;
  for (let idx = 0; idx < strs[0].length; idx++) if (!isSorted(idx)) deleted++;
  return deleted;
};

console.log(minDeletionSize(["cba", "daf", "ghi"]));
