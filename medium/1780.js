/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  let powers = [];
  for (let i = 0; 3 ** i <= n; i++) powers.push(3 ** i);
  powers.sort((a, b) => (a > b ? -1 : 1));

  function isPossible(num = n, idx = 0) {
    if (num === 0) return true;
    if (idx >= powers.length) return false;
    return (
      (num >= powers[idx] && isPossible(num - powers[idx], idx + 1)) ||
      isPossible(num, idx + 1)
    );
  }

  return isPossible();
};

console.log(checkPowersOfThree(12));
