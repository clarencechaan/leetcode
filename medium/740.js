/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let freqMap = {};
  let unique = [];
  for (const num of nums) {
    if (!freqMap[num]) {
      unique.push(num);
      freqMap[num] = 0;
    }
    freqMap[num]++;
  }
  unique.sort((a, b) => (a > b ? 1 : -1));

  let points = 0;
  let prev;
  let prevPoints = 0;
  for (const num of unique) {
    let temp = points;
    if (prev === num - 1)
      points = Math.max(prevPoints + freqMap[num] * num, points);
    else points += freqMap[num] * num;
    prevPoints = temp;
    prev = num;
  }

  return points;
};

console.log(deleteAndEarn([8, 10, 4, 9, 1, 3, 5, 9, 4, 10]));
