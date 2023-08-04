/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let heightIdx = [];
  for (let i = 0; i < heights.length; i++)
    if (!heightIdx[heights[i]]) heightIdx[heights[i]] = new Set([i]);
    else heightIdx[heights[i]].add(i);

  let max = 0;
  for (let height = 1; height < heightIdx.length; height++) {
    if (!heightIdx[height]) continue;
    for (const idx of heightIdx[height]) {
      let left = idx;
      let right = idx;
      while (heights[left - 1] >= height) {
        if (heights[left - 1] === height) heightIdx[height].delete(left - 1);
        left--;
      }
      while (heights[right + 1] >= height) {
        if (heights[right + 1] === height) heightIdx[height].delete(right + 1);
        right++;
      }
      max = Math.max(max, height * (right - left + 1));
    }
  }

  return max;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
