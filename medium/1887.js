/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
  // the operation:
  // 1. reduce the largest number to the next largest number that isn't equal to the largest number
  // 2. repeat until all the numbers are equal to the smallest number

  // idea:
  // 1. create a map freq[num] where freq[num] is the number of times that num appears in the array nums
  // 2. convert map to an array where elements are in the format of [number, count of times that number appears in nums]
  // 3. sort the array freq in descending order
  // 4. declare result, equal to 0
  // 5. iterate through freq from left to right, increasing result by the value of freq[i][1], and increasing freq[i+1][1] by freq[i][1]
  // 6. return result

  let freq = {};
  for (const num of nums) freq[num] = (freq[num] || 0) + 1;

  freq = Object.entries(freq).map((pair) => [parseInt(pair[0]), pair[1]]);

  freq.sort((a, b) => (a[0] > b[0] ? -1 : 1));

  let result = 0;
  for (let i = 0; i < freq.length - 1; i++) {
    const count = freq[i][1];
    result += count;
    freq[i + 1][1] += count;
  }

  return result;
};

console.log(reductionOperations([5, 1, 3]));
