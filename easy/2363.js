/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
// 1) concatenate both arrays together
// 2) sort by value, ascending
// 3) loop through each element, stopping just before the last element
//  a) if the value of current element is equal to the value of the next
//      element, add the weight of the next element to the weight of the
//      current element, then remove the next element
// 4) return the resulting array
var mergeSimilarItems = function (items1, items2) {
  let ret = items1.concat(items2);
  ret.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  for (let i = 0; i < ret.length - 1; i++) {
    if (ret[i][0] === ret[i + 1][0]) {
      ret[i][1] += ret[i + 1][1];
      ret = [...ret.slice(0, i + 1), ...ret.slice(i + 2)];
    }
  }

  return ret;
};

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  )
);
