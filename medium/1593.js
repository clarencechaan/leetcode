/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
  let set = new Set();

  function recurse(idx = 0) {
    if (idx >= s.length) return 0;
    let max = 0;
    for (let length = 1; idx + length <= s.length; length++) {
      let sub = s.slice(idx, idx + length);
      if (!set.has(sub)) {
        set.add(sub);
        max = Math.max(max, 1 + recurse(idx + length));
        set.delete(sub);
      }
    }
    return max;
  }

  return recurse();
};

console.log(maxUniqueSplit("ababccc"));
