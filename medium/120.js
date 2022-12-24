/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let minPath = [];
  for (let i = 0; i < triangle.length; i++) minPath.push([]);

  minPath[minPath.length - 1] = [...triangle[triangle.length - 1]];

  for (let i = triangle.length - 2; i >= 0; i--)
    for (let j = 0; j < triangle[i].length; j++)
      minPath[i][j] =
        triangle[i][j] + Math.min(minPath[i + 1][j], minPath[i + 1][j + 1]);

  return minPath[0][0];
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
