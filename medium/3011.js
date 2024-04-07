/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  nums = nums.map((num) => ({
    num,
    setBits: num.toString(2).replaceAll("0", "").length,
  }));

  const unsortedGroups = [];
  nums.forEach((num, idx) => {
    if (num.setBits !== nums[idx - 1]?.setBits) unsortedGroups.push(new Set());
    unsortedGroups[unsortedGroups.length - 1].add(num.num);
  });

  const sorted = [...nums].sort((a, b) => (a.num > b.num ? 1 : -1));
  const sortedGroups = [];
  sorted.forEach((num, idx) => {
    if (num.setBits !== nums[idx - 1]?.setBits) sortedGroups.push(new Set());
    sortedGroups[sortedGroups.length - 1].add(num.num);
  });

  function areGroupsEqual(a, b) {
    return a.size === b.size && new Set([...a, ...b]).size === a.size;
  }

  if (unsortedGroups.length !== sortedGroups.length) return false;
  for (let i = 0; i < unsortedGroups.length; i++)
    if (!areGroupsEqual(unsortedGroups[i], sortedGroups[i])) return false;

  return true;
};

console.log(canSortArray([8, 4, 2, 30, 15]));
