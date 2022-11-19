/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let l = k - 1;
  let permutations = factorial(n);
  let options = [];
  for (let i = 1; i <= n; i++) options.push(i);

  let answer = [];

  while (options.length) {
    const size = permutations / options.length;
    const section = Math.floor(l / size);
    const digit = options[section];
    answer.push(digit);
    permutations /= options.length;
    options = [...options.slice(0, section), ...options.slice(section + 1)];
    l -= section * size;
  }

  return answer.join("");
};

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

console.log(getPermutation(3, 3));

// n = 3
// k = 3
// [1, 2, 3]
// 6 permutations / 3 options = size 2
// (k - 1) / 2 = 1 => section 1 => digit "2"
// 2 permutations / 2 options = size 1
// (k - 3) / 1 = 0 => section 0 => digit "1"
