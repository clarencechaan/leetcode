/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function (nums) {
  const n = nums.length;

  let maxOR = [];
  for (let i = n - 1; i >= 0; i--) maxOR[i] = (maxOR[i + 1] || 0) | nums[i];

  nums = nums.map((num) => num.toString(2));
  maxOR = maxOR.map((num) => num.toString(2));

  const bitLength = nums.reduce((max, num) => Math.max(max, num.length), 0);

  nums = nums.map((binary) => "0".repeat(bitLength - binary.length) + binary);
  maxOR = maxOR.map((binary) => "0".repeat(bitLength - binary.length) + binary);

  const bitFreq = Array(bitLength).fill(0);
  const bitFreqArr = [];

  for (const binary of nums) {
    for (let i = 0; i < bitLength; i++) bitFreq[i] += +binary[i];
    bitFreqArr.push([...bitFreq]);
  }

  function isValid(start, end) {
    const startBinary = nums[start];
    const startBitFreq = bitFreqArr[start];
    const endBitFreq = bitFreqArr[end - 1];

    for (let i = 0; i < bitLength; i++)
      if (
        maxOR[start][i] === "1" &&
        startBinary[i] === "0" &&
        endBitFreq[i] - startBitFreq[i] <= 0
      )
        return false;

    return true;
  }

  function binarySearch(start) {
    let min = start + 1;
    let max = n;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (isValid(start, mid)) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }

    return mid;
  }

  return Array(n)
    .fill()
    .map((_, start) => binarySearch(start) - start);
};

console.log(smallestSubarrays([1, 0, 2, 1, 3]));
