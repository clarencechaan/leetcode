/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function (n) {
  let ranges = [[0, 1]];
  for (let i = 1; ; i++) {
    const [min, max] = ranges[ranges.length - 1];
    if (max >= n) break;
    if (i % 2 === 1) ranges.push([min - 2 ** i, max]);
    else ranges.push([min, max + 2 ** i]);
  }

  function getBaseNeg2(num = n) {
    if (ranges.length === 0) return "";
    const [min, max] = ranges.pop();
    let nextNum = num - (-2) ** ranges.length;
    if (min <= nextNum && nextNum <= max) return "1" + getBaseNeg2(nextNum);
    else return "0" + getBaseNeg2(num);
  }

  return getBaseNeg2();
};

console.log(baseNeg2(2));
