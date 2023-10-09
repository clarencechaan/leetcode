/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  let set = new Set();

  for (let num of nums) {
    set.add(num);
    num = parseInt(num.toString().split("").reverse().join(""));
    set.add(num);
  }

  return set.size;
};

console.log(countDistinctIntegers([1, 13, 10, 12, 31]));
