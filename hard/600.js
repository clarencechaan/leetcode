/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function (n) {
  // return the number of binary numbers in the range `[0, binary]` that do not
  // contain consecutive ones
  const memo = {};
  function countWays(binary) {
    switch (binary) {
      case "":
      case "0":
        return 1;
      case "1":
        return 2;
    }
    if (memo[binary]) return memo[binary];

    const length = binary.length;

    let result;
    switch (binary.slice(0, 2)) {
      case "00":
      case "01":
        result = countWays(binary.slice(1)); // zero
        break;
      case "10":
        result = countWays(binary.slice(2)) + countWays("1".repeat(length - 1)); // one + zero
        break;
      case "11":
        result =
          countWays("1".repeat(length - 2)) + countWays("1".repeat(length - 1)); // one + zero
        break;
    }

    memo[binary] = result;
    return result;
  }

  const binary = n.toString(2);
  return countWays(binary);
};

console.log(findIntegers(5));
