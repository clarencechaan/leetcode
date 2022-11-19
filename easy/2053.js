/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  return (
    arr.filter((a) => arr.filter((b) => b === a).length === 1)[k - 1] || ""
  );
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
