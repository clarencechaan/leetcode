/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
  const squares = [];

  // drop the square, and push the `[left, right, height]` value of the square
  // into the `squares` array; return the height that the square reaches
  function dropSquare([left, sideLength]) {
    const right = left + sideLength;
    let height = sideLength;

    for (const [left2, right2, height2] of squares) {
      const intersection = [Math.max(left, left2), Math.min(right, right2)];
      if (intersection[0] < intersection[1])
        height = Math.max(height, sideLength + height2);
    }

    squares.push([left, right, height]);
    return height;
  }

  const ans = [];
  for (let i = 0; i < positions.length; i++)
    ans[i] = Math.max(ans[i - 1] || 0, dropSquare(positions[i]));
  return ans;
};

console.log(
  fallingSquares([
    [1, 2],
    [2, 3],
    [6, 1],
  ])
);
