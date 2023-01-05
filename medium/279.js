/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let maxSquare = Math.floor(Math.sqrt(n));

  let min = Infinity;

  function recurse(n, square, count = 0) {
    if (n % Math.pow(square, 2) === 0) return count + n / Math.pow(square, 2);
    else if (square <= 1) return Infinity;

    let m = Math.floor(n / Math.pow(square, 2));
    for (let i = m; i >= 0 && count + i < min - 1; i--)
      min = Math.min(
        recurse(n - Math.pow(square, 2) * i, square - 1, count + i),
        min
      );

    return min;
  }

  return recurse(n, maxSquare);
};

console.log(numSquares(480));
