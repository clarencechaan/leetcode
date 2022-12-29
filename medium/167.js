/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  function sortedFindIndex(min, num) {
    let max = numbers.length - 1;
    let mid = Math.floor((min + max) / 2);

    while (max > min) {
      if (numbers[mid] > num) max = mid - 1;
      else if (numbers[mid] < num) min = mid + 1;
      else if (numbers[mid] === num) break;
      mid = Math.floor((min + max) / 2);
    }

    if (numbers[mid] === num) return mid;
    else return -1;
  }

  for (let i = 0; i < numbers.length - 1; i++) {
    const idx = sortedFindIndex(i + 1, target - numbers[i]);
    if (idx >= 0) return [i + 1, idx + 1];
  }
};

console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200));
