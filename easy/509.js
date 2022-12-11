/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n;

  let prev = [0, 1];
  for (let i = 1; i < n; i++) {
    const temp = prev[0] + prev[1];
    prev[0] = prev[1];
    prev[1] = temp;
  }

  return prev[1];
};

console.log(fib(6));
