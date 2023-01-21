/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length;
  let sum = 0;

  if (k > 0) for (let i = 1; i <= k; i++) sum += code[i];
  else if (k < 0) for (let i = -1; i >= k; i--) sum += code[i + n];

  let result = [sum];

  for (let i = 1; i < n; i++) {
    if (k > 0) sum += code[(i + k) % n] - code[i];
    else if (k < 0) sum += code[i - 1] - code[(i + k - 1 + n) % n];
    result[i] = sum;
  }

  return result;
};

// console.log(decrypt([5, 7, 1, 4], 3));
console.log(decrypt([2, 4, 9, 3], -2));
