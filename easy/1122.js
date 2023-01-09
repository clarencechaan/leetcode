/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let ordering = {};
  for (let i = 0; i < arr2.length; i++) ordering[arr2[i]] = i;

  let resultLeft = [];
  let resultRight = [];

  for (const num of arr1)
    if (ordering[num] === undefined) resultRight.push(num);
    else resultLeft.push(num);

  resultLeft.sort((a, b) => (ordering[a] > ordering[b] ? 1 : -1));
  resultRight.sort((a, b) => (a > b ? 1 : -1));

  return [...resultLeft, ...resultRight];
};

console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
