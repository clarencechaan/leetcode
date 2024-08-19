/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
  const remainingSpaces = capacity.map((c, i) => c - rocks[i]);
  remainingSpaces.sort((a, b) => a - b);

  let ans = 0;
  while (additionalRocks >= remainingSpaces[ans]) {
    additionalRocks -= remainingSpaces[ans];
    ans++;
  }

  return ans;
};

console.log(maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2));
