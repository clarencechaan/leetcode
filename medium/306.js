/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  let maxLength = Math.floor(num.length / 2);
  let possibleStarters = [];

  for (let i = 1; i <= maxLength; i++)
    for (let j = 1; j <= maxLength; j++)
      possibleStarters.push([
        parseInt(num.substring(0, i)),
        parseInt(num.substring(i, i + j)),
      ]);

  function isStarterValid(str, a, b) {
    if (!str.length) return true;
    let sum = a + b;
    let sumStr = sum.toString();
    if (str.substring(0, sumStr.length) === sumStr)
      return isStarterValid(str.substring(sumStr.length), b, sum);
    return false;
  }

  for (const [a, b] of possibleStarters) {
    let ab = a.toString() + b.toString();
    if (ab !== num && isStarterValid(num.substring(ab.length), a, b))
      return true;
  }

  return false;
};

console.log(isAdditiveNumber("112358"));
