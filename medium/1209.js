/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  function canRemove(idx = 0, str) {
    let sub = str[idx].repeat(k);
    return str.slice(idx, idx + k) === sub;
  }

  let str = s;
  for (let i = 0; i + k <= str.length; i++)
    if (canRemove(i, str)) {
      str = str.slice(0, i) + str.slice(i + k);
      i = Math.max(-1, i - k - 1);
    }

  return str;
};

console.log(removeDuplicates("deeedbbcccbdaa", 3));
