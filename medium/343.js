/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let max = 0;
  let k = n;

  while (k >= 2) {
    let product = 1;
    let num = n;
    for (let i = 0; i < k; i++) {
      let factor;
      if (i === k - 1 || num < Math.floor(n / k)) factor = num;
      else factor = Math.floor(n / k);
      product *= factor;
      num -= factor;
    }
    max = Math.max(product, max);

    product = 1;
    num = n;
    for (let i = 0; i < k; i++) {
      let factor;
      if (i === k - 1 || num < Math.ceil(n / k)) factor = num;
      else factor = Math.ceil(n / k);
      product *= factor;
      num -= factor;
    }
    max = Math.max(product, max);

    k--;
  }

  return max;
};

console.log(integerBreak(8));

// 24
// 12 * 12 = 144
// 8 * 8 * 8 = 512
// 6 * 6 * 6 * 6 = 1296
// 5 * 5 * 5 * 5 * 4 = 2400
// 4 ^ 6 = 4096
// 3 ^ 8 = 6561
// 2 ^ 12 = 4096

// 8
// 4 * 4 = 16
// 2 * 2 * 4 = 16
// 2 ^ 4 = 16
// 3 * 3 * 2 = 18
