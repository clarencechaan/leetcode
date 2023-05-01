/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  arr.sort((a, b) => (Math.abs(a) > Math.abs(b) ? 1 : -1));
  let map = {};
  for (const num of arr) map[num] = (map[num] || 0) + 1;

  for (const num of arr) {
    if (map[num] > 0 && map[2 * num] > 0) {
      map[num]--;
      map[2 * num]--;
    }
  }

  for (const num in map) if (map[num] > 0) return false;

  return true;
};

console.log(canReorderDoubled([2, 4, 0, 0, 8, 1]));
