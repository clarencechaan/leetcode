/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  // naive approach: add every element in the multiplication table to an array,
  // sort the array, return the k-th smallest element
  // const arr = [];
  // for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) arr.push(i * j);
  // arr.sort((a, b) => (a > b ? 1 : -1));
  // return arr[k - 1];

  // return the number of elements in the multiplication table that are less
  // than num
  function numberOfElementsLessThan(num) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      const j = binarySearch(i, num);
      count += j;
    }
    return count;
  }

  // binary search for largest number `j` such that `i*j<num`
  function binarySearch(i, num) {
    let min = 0;
    let max = m;
    let j = Math.ceil((min + max) / 2);
    while (min < max) {
      if (i * j < num) min = j;
      else max = j - 1;
      j = Math.ceil((min + max) / 2);
    }
    return j;
  }

  // binary search for the greatest number `num` where the number of elements
  // less than `num` is less than `k`
  function binarySearchNum() {
    let min = 1;
    let max = m * n;
    let num = Math.ceil((min + max) / 2);
    while (min < max) {
      const numLT = numberOfElementsLessThan(num);
      if (numLT < k) min = num;
      else max = num - 1;
      num = Math.ceil((min + max) / 2);
    }
    return num;
  }

  return binarySearchNum();
};

console.log(findKthNumber(3, 3, 5));

// number of elements less than: 0 1 1 3 3 5 6 6 8
// elems:                        1 2 2 3 3 4 6 6 9
// k-th smallest:                1 2 3 4 5 6 7 8 9

// 1 2 3
