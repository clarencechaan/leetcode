/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  colors = colors.split("").map((color, idx) => [color, neededTime[idx]]);

  let result = 0;
  for (let i = 1; i < colors.length; i++)
    if (colors[i - 1][0] === colors[i][0]) {
      result += Math.min(colors[i - 1][1], colors[i][1]);
      colors[i][1] = Math.max(colors[i - 1][1], colors[i][1]);
    }

  return result;
};

console.log(minCost("abaac", [1, 2, 3, 4, 5]));
