/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
  // 1. keep array sorted
  // 2. halve the largest number, check if sum is half or less
  // 3. repeat
  // too slow, try with 10 buckets?

  let sum = nums.reduce((sum, num) => sum + num, 0);
  const half = sum / 2;
  nums.sort((a, b) => (a > b ? 1 : -1));

  const bucketSize = Math.ceil(nums.at(-1) / 10);

  const buckets = [];
  for (let i = 0; i < 10; i++) {
    buckets[i] = {
      range: [i * bucketSize + 1, (i + 1) * bucketSize],
      values: [],
    };
  }

  function findInsertIndex(values, num) {
    let min = 0;
    let max = values.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (values[mid] > num) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  function getBucket(num) {
    const idx = Math.floor((num - 1) / bucketSize);
    return buckets[idx];
  }

  for (const num of nums) {
    const bucket = getBucket(num);
    bucket.values.push(num);
  }

  function popEmptyBuckets() {
    let bucket = buckets.at(-1);
    while (bucket && !bucket.values.length) {
      buckets.pop();
      bucket = buckets.at(-1);
    }
  }

  popEmptyBuckets();

  function insertInBucket(num) {
    const bucket = getBucket(num);
    if (!bucket) return;
    const index = findInsertIndex(bucket.values, num);
    bucket.values.splice(index, 0, num);
  }

  let operations = 0;
  function runOperation() {
    if (sum <= half) return false;

    let bucket = buckets.at(-1);
    const newNum = bucket.values.pop() / 2;
    sum -= newNum;
    insertInBucket(newNum);
    operations++;

    popEmptyBuckets();

    if (!bucket) return false;
    return true;
  }

  while (runOperation());

  return operations;
};

console.log(halveArray([5, 19, 8, 1]));
