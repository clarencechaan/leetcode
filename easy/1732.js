/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0;
  let curr = 0;

  for (const num of gain) {
    curr += num;
    max = Math.max(curr, max);
  }

  return max;
};

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
