/**
 * @param {number[]} nums
 * @return {number}
 */
var numSquarefulPerms = function (nums) {
  // naive approach:
  // 1. find every permutation
  // 2. for each permutation, check if it is squareful; if it is, increment our result

  // another idea:
  // 1. find ONLY every squareful permutation, ignore non-squareful permutations

  const freq = {};
  for (const num of nums) freq[num] = (freq[num] || 0) + 1;

  function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }

  function recursiveNumSquarefulPerms(permutation = [], remaining = freq) {
    if (permutation.length === nums.length) return 1;

    let result = 0;

    for (let num in remaining) {
      if (!remaining[num]) continue;
      num = parseInt(num);
      if (
        !permutation.length ||
        isPerfectSquare(permutation[permutation.length - 1] + num)
      ) {
        remaining[num]--;
        permutation.push(num);
        result += recursiveNumSquarefulPerms(permutation, remaining);
        permutation.pop();
        remaining[num]++;
      }
    }

    return result;
  }

  return recursiveNumSquarefulPerms();
};

console.log(numSquarefulPerms([1, 17, 8]));
