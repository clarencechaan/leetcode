/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  let set = new Set();
  for (let i = 0; i + k <= s.length; i++) set.add(s.substring(i, i + k));
  return set.size === 2 ** k;
};

console.log(hasAllCodes("00110110", 2));
