/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let largestFromLeft = [];
  let largestFromRight = [];
  let largestL = 0;
  let largestR = 0;

  for (let i = 0; i < height.length; i++) {
    if (height[i] > largestL) largestL = height[i];
    if (height[height.length - 1 - i] > largestR)
      largestR = height[height.length - 1 - i];
    largestFromLeft[i] = largestL;
    largestFromRight[height.length - 1 - i] = largestR;
  }

  let max = 0;
  let i = 0;
  let j = largestFromRight.length - 1;
  while (i !== j) {
    max = Math.max(
      Math.min(largestFromLeft[i], largestFromRight[j]) * (j - i),
      max
    );
    if (largestFromLeft[i] < largestFromRight[j]) i++;
    else j--;
  }

  return max;
};

console.log(maxArea([1, 1]));
