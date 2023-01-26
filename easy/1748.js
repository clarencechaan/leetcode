/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let seen = new Set();
  let unique = new Set();

  for (const num of nums)
    if (!seen.has(num) && !unique.has(num)) {
      seen.add(num);
      unique.add(num);
    } else if (seen.has(num)) unique.delete(num);

  let result = 0;
  for (const num of unique) result += num;
  return result;
};

console.log(sumOfUnique([1, 2, 3, 4, 5]));
