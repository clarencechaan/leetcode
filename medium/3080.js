/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var unmarkedSumArray = function (nums, queries) {
  const n = nums.length;

  // objects of type { marked: boolean, index: number, value: number }
  nums = nums.map((value, index) => ({ marked: false, index, value }));

  nums.sort((a, b) =>
    a.value > b.value || (a.value === b.value && a.index > b.index) ? 1 : -1
  );

  const oldIndexToNewIndexMap = [];
  for (let i = 0; i < n; i++) oldIndexToNewIndexMap[nums[i].index] = i;

  let cursor = 0;

  function mark(index, k) {
    let sum = 0;

    // mark number at index
    const newIndex = oldIndexToNewIndexMap[index];
    if (!nums[newIndex].marked) {
      sum += nums[newIndex].value;
      nums[newIndex].marked = true;
    }

    // mark the k smallest
    while (k > 0 && cursor < n) {
      if (!nums[cursor].marked) {
        sum += nums[cursor].value;
        nums[cursor].marked = true;
        k--;
      } else {
        cursor++;
      }
    }

    return sum;
  }

  let unmarkedSum = nums.reduce((sum, obj) => sum + obj.value, 0);
  const answer = [];

  for (const [index, k] of queries) {
    unmarkedSum -= mark(index, k);
    answer.push(unmarkedSum);
  }

  return answer;
};

console.log(
  unmarkedSumArray(
    [1, 2, 2, 1, 2, 3, 1],
    [
      [1, 2],
      [3, 3],
      [4, 2],
    ]
  )
);
