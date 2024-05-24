/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function (cost, target) {
  const dp = [];
  function recursion(money = target) {
    if (money === 0) return "";
    if (money < 0) return "X";
    if (dp[money] !== undefined) return dp[money];

    let number = "";
    for (let digit = 9; digit >= 1; digit--) {
      const call = digit.toString() + recursion(money - cost[digit - 1]);
      if (
        call.slice(-1) !== "X" &&
        (call.length > number.length ||
          (call.length === number.length && call > number))
      )
        number = call;
    }

    if (!number.length) number = "X";
    dp[money] = number;
    return number;
  }

  let ans = recursion();
  if (ans === "X") ans = "0";
  return ans;
};

console.log(largestNumber([4, 3, 2, 5, 6, 7, 2, 5, 5], 9));
