/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let sorted = nums.sort((a, b) => (a > b ? -1 : 1));

  let important = [];
  important = [...important, ...sorted.slice(0, 3)];
  sorted = sorted.slice(3);
  sorted.reverse();
  important = [...important, ...sorted.slice(0, 3)];
  sorted = sorted.slice(3);
  sorted = sorted.sort((a, b) => (Math.abs(a) > Math.abs(b) ? 1 : -1));
  important = [...important, ...sorted.slice(0, 3)];

  let max = -Infinity;
  for (let i = 0; i < important.length - 2; i++)
    for (let j = i + 1; j < important.length - 1; j++)
      for (let k = j + 1; k < important.length; k++)
        max = Math.max(max, important[i] * important[j] * important[k]);

  return max;
};

console.log(maximumProduct([1, 2, 3, 4, -5]));
