/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  while (height[height.length - 1] === 0) height.pop();
  height = height.slice(height.findIndex((val) => val > 0));
  let maxHeight = height.reduce((max, val) => Math.max(max, val), 0);

  let leftWall = [];
  let idx = 0;
  for (let wall = 1; wall <= maxHeight; wall++) {
    while (height[idx] < wall) idx++;
    leftWall.push(idx);
  }

  let rightWall = [];
  idx = height.length - 1;
  for (let wall = 1; wall <= maxHeight; wall++) {
    while (height[idx] < wall) idx--;
    rightWall.push(idx);
  }

  function waterLevel(idx) {
    if (idx < leftWall[0] || idx > rightWall[0]) return 0;
    let min = 0;
    let max = maxHeight;
    let mid = Math.ceil((min + max) / 2);
    while (max - min > 1) {
      if (leftWall[mid] < idx && idx < rightWall[mid]) min = mid;
      else if (idx < leftWall[mid] || idx > rightWall[mid]) max = mid - 1;
      else if (leftWall[mid] === idx || rightWall[mid] === idx)
        return height[idx];
      mid = Math.ceil((min + max) / 2);
    }

    if (
      leftWall[min] === idx ||
      rightWall[min] === idx ||
      leftWall[max] === idx ||
      rightWall[max] === idx
    )
      return height[idx];
    if (leftWall[max] < idx && idx < rightWall[max]) return max + 1;
    else return min + 1;
  }

  let result = 0;
  for (let i = 0; i < height.length; i++) result += waterLevel(i) - height[i];

  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
