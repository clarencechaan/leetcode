/**
 * @param {string} s
 * @return {number}
 */
var numPermsDISequence = function (s) {
  const n = s.length;

  const ans = Array(n + 1)
    .fill()
    .map(() => []);
  ans[0] = Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) {
    const direction = s[i - 1];
    for (let j = 0; j <= n - i; j++) {
      let sum = 0;
      if (direction === "D")
        for (let k = j + 1; k <= n - i + 1; k++) sum += ans[i - 1][k];
      else for (let k = 0; k <= j; k++) sum += ans[i - 1][k];
      sum %= 10 ** 9 + 7;
      ans[i][j] = sum;
    }
  }

  return ans[n][0];
};

console.log(
  numPermsDISequence("IIDIIDDIDDDDIIDDIDIDIDDDDIDDDIIIIDDIDDDDIDIIDDIDID")
);
