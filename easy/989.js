/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const kArr = k
    .toString()
    .split("")
    .map((char) => parseInt(char))
    .reverse();
  const numArr = [...num].reverse();

  let result = [];

  for (let i = 0; i < Math.max(kArr.length, numArr.length); i++)
    result[i] = (kArr[i] ? kArr[i] : 0) + (numArr[i] ? numArr[i] : 0);

  for (let i = 0; i < result.length; i++)
    if (result[i] > 9) {
      result[i] -= 10;
      result[i + 1] = result[i + 1] ? result[i + 1] + 1 : 1;
    }

  return result.reverse();
};

console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
