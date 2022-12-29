/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  function recurse(arr) {
    if (arr.length === 1) return arr[0];
    let halfA = arr.slice(0, Math.floor(arr.length / 2));
    let halfB = arr.slice(Math.floor(arr.length / 2));
    let min = Math.min(
      halfA[0],
      halfA[halfA.length - 1],
      halfB[0],
      halfB[halfB.length - 1]
    );
    if (min === halfA[0] || min === halfA[halfA.length - 1])
      return recurse(halfA);
    else if (min === halfB[0] || min === halfB[halfB.length - 1])
      return recurse(halfB);
  }

  return recurse(nums);
};

console.log(findMin([11, 13, 15, 17]));
