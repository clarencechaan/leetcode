/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const m = rolls.length;
  const totalSum = mean * (n + m);
  let missingSum = totalSum - rolls.reduce((sum, roll) => sum + roll, 0);

  if (missingSum < n || missingSum > n * 6) return [];

  const result = [];
  for (; n > 0; n--) {
    for (let roll = 1; roll <= 6; roll++)
      if (n - 1 <= missingSum - roll && missingSum - roll <= (n - 1) * 6) {
        missingSum -= roll;
        result.push(roll);
        break;
      }
  }

  return result;
};

console.log(missingRolls([3, 2, 4, 3], 4, 2));
