/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
  let lastNonEnemy;
  let idx = 0;
  while (forts[idx] === 0) idx++;

  lastNonEnemy = forts[idx];

  let streak = 0;
  let ans = 0;
  for (; idx < forts.length; idx++) {
    if (forts[idx] === 0) streak++;
    else if (forts[idx] !== lastNonEnemy) {
      ans = Math.max(ans, streak);
      lastNonEnemy = forts[idx];
      streak = 0;
    } else streak = 0;
  }

  return ans;
};

console.log(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1]));
