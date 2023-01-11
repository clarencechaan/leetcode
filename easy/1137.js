/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let t0 = 0;
  let t1 = 1;
  let t2 = 1;

  if (n === 0) return t0;
  else if (n === 1) return t1;
  else if (n === 2) return t2;

  for (let i = 3; i <= n; i++) [t0, t1, t2] = [t1, t2, t0 + t1 + t2];
  return t2;
};

console.log(tribonacci(25));
