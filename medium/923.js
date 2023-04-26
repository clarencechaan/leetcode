/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  let map = {};
  for (const num of arr) map[num] = (map[num] || 0n) + 1n;

  function choose(n, r) {
    function factorial(x) {
      if (x <= 1n) return 1n;
      return x * factorial(x - 1n);
    }
    return factorial(n) / (factorial(r) * factorial(n - r));
  }

  let result = 0n;
  for (const str1 in map) {
    for (const str2 in map) {
      let [num1, num2] = [parseInt(str1), parseInt(str2)];
      let num3 = target - num1 - num2;
      if (num2 < num1 || num3 < num2 || !map[num3]) continue;
      if (num1 == num2 && num2 == num3) {
        if (map[num1] >= 3) result += choose(map[num1], 3n);
      } else if (num1 == num2) {
        if (map[num1] >= 2) result += choose(map[num1], 2n) * map[num3];
      } else if (num2 == num3) {
        if (map[num2] >= 2) result += map[num1] * choose(map[num2], 2n);
      } else {
        result += map[num1] * map[num2] * map[num3];
      }
      result = result % (10n ** 9n + 7n);
    }
  }

  return Number(result);
};

console.log(threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8));
