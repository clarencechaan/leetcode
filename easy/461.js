/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const xArr = x
    .toString(2)
    .split("")
    .map((char) => parseInt(char))
    .reverse();
  const yArr = y
    .toString(2)
    .split("")
    .map((char) => parseInt(char))
    .reverse();

  while (xArr.length < yArr.length) xArr.push(0);
  while (yArr.length < xArr.length) yArr.push(0);

  let distance = 0;
  for (let i = 0; i < xArr.length; i++) if (xArr[i] !== yArr[i]) distance++;
  return distance;
};

console.log(hammingDistance(3, 1));
