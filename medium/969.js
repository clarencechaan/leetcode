/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  let result = [];
  while (arr.length) {
    let max = -Infinity;
    let maxIdx = -1;
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
        maxIdx = i;
      }
    }
    if (maxIdx) result.push(maxIdx + 1);
    result.push(arr.length);
    arr = [...arr.slice(0, maxIdx + 1).reverse(), ...arr.slice(maxIdx + 1)];
    arr.reverse();
    arr.pop();
  }

  return result;
};

console.log(pancakeSort([3, 2, 4, 1]));
