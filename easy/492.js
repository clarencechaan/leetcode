/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let dimensions = [];
  for (let i = 1; i <= area; i++)
    if (area % i === 0 && i >= area / i) dimensions.push([i, area / i]);
  return dimensions.reduce(
    (min, d) => (d[0] - d[1] < min[0] - min[1] ? d : min),
    dimensions[0]
  );
};

console.log(constructRectangle(122122));
