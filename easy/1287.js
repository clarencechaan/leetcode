/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let quarter = Math.floor(arr.length / 4);

  for (let i = 0; i < arr.length; i++)
    if (arr[i] === arr[i + quarter]) return arr[i];
};

console.log(
  findSpecialInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12])
);
