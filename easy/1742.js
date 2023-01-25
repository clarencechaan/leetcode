/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  let boxes = [];

  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = 0;
    for (const char of i.toString()) sum += parseInt(char);
    if (!boxes[sum]) boxes[sum] = 0;
    boxes[sum]++;
  }

  return boxes.reduce((max, balls) => Math.max(max, balls), 0);
};

console.log(countBalls(19, 28));
