/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let costs = [];
  for (let i = 0; i < s.length; i++)
    costs[i] = Math.abs(s[i].charCodeAt() - t[i].charCodeAt());

  let totalCost = 0;
  let left = 0;
  let right;
  for (right = 0; right < costs.length; right++) {
    totalCost += costs[right];
    if (totalCost > maxCost) {
      totalCost -= costs[left];
      left++;
    }
  }

  return right - left;
};

console.log(equalSubstring("abcd", "bcdf", 3));
