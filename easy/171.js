/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let k = 0;
  let sum = 0;
  let arr = columnTitle.split("").reverse();
  for (const char of arr) {
    sum += colNum(char) * Math.pow(26, k);
    k++;
  }
  return sum;
};

function colNum(column) {
  return column.charCodeAt() - 64;
}

console.log(titleToNumber("ZY"));
