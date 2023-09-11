/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  let queue = [[nums[0], 0]];
  let qIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    if (queue[qIdx][1] < i - k) qIdx++;
    let score = queue[qIdx][0] + nums[i];
    while (queue.length > qIdx && queue[queue.length - 1][0] < score)
      queue.pop();
    queue.push([score, i]);
  }

  return queue[queue.length - 1][0];
};

console.log(maxResult([1, -1, -2, 4, -7, 3], 2));
