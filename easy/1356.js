/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));
  arr.sort((a, b) =>
    a.toString(2).replaceAll("0", "").length >=
    b.toString(2).replaceAll("0", "").length
      ? 1
      : -1
  );

  return arr;
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
