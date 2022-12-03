/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  for (let i = 1; i <= area; i++)
    if (area % i === 0 && i >= area / i) return [i, area / i];
};

console.log(constructRectangle(122122));
