/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  const dp = Array(n + 1)
    .fill()
    .map(() => ({}));
  function recursion(length = n, prevLetter) {
    if (length === 0) return 1;
    if (dp[length][prevLetter] >= 0) return dp[length][prevLetter];

    let result;
    switch (prevLetter) {
      case "a":
        result = recursion(length - 1, "e");
        break;
      case "e":
        result = recursion(length - 1, "a") + recursion(length - 1, "i");
        break;
      case "i":
        result =
          recursion(length - 1, "a") +
          recursion(length - 1, "e") +
          recursion(length - 1, "o") +
          recursion(length - 1, "u");
        break;
      case "o":
        result = recursion(length - 1, "i") + recursion(length - 1, "u");
        break;
      case "u":
        result = recursion(length - 1, "a");
        break;
      default:
        result =
          recursion(length - 1, "a") +
          recursion(length - 1, "e") +
          recursion(length - 1, "i") +
          recursion(length - 1, "o") +
          recursion(length - 1, "u");
    }

    result %= 10 ** 9 + 7;
    dp[length][prevLetter] = result;

    return result;
  }

  return recursion();
};

console.log(countVowelPermutation(1));
