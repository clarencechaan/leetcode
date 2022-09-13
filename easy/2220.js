/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
// 1) convert each number to binary
// 2) count the number of of matching digits
// 3) count the difference in length
// 4) return total
var minBitFlips = function (start, goal) {
  let startArr = toBinaryArr(start);
  let goalArr = toBinaryArr(goal);

  let count = 0;
  for (let i = 0; i < Math.max(startArr.length, goalArr.length); i++) {
    if (!startArr[i] !== !goalArr[i]) count++;
  }

  return count;
};

function toBinaryArr(num) {
  if (!num) return [0];

  let temp = num;
  let k = Math.floor(Math.log2(temp));
  let binary = Array(k + 1).fill(0);

  while (temp > 0) {
    k = Math.floor(Math.log2(temp));
    binary[k] = 1;
    temp -= Math.pow(2, k);
  }

  return binary;
}

console.log(minBitFlips(10, 7));
