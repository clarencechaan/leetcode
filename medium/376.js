/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let diffs = nums.map((val, idx) => val - nums[idx - 1]).slice(1);

  diffs = diffs.filter((diff) => diff);

  for (let i = 0; i < diffs.length - 2; i++) {
    if (
      (diffs[i] < 0 &&
        diffs[i + 1] > 0 &&
        diffs[i + 2] > 0 &&
        Math.abs(diffs[i]) > diffs[i + 1]) ||
      (diffs[i] > 0 &&
        diffs[i + 1] < 0 &&
        diffs[i + 2] < 0 &&
        diffs[i] > Math.abs(diffs[i + 1]))
    ) {
      diffs = [
        ...diffs.slice(0, i),
        diffs[i] + diffs[i + 1],
        ...diffs.slice(i + 2),
      ];
      i = -1;
    } else if (
      (diffs[i] > 0 &&
        diffs[i + 1] > 0 &&
        diffs[i + 2] < 0 &&
        diffs[i + 1] < Math.abs(diffs[i + 2])) ||
      (diffs[i] < 0 &&
        diffs[i + 1] < 0 &&
        diffs[i + 2] > 0 &&
        Math.abs(diffs[i + 1]) < diffs[i + 2])
    ) {
      diffs = [
        ...diffs.slice(0, i + 1),
        diffs[i + 1] + diffs[i + 2],
        ...diffs.slice(i + 3),
      ];
      i = -1;
    }
  }

  for (let i = 0; i < diffs.length - 1; i++) {
    if (
      (diffs[i] > 0 && diffs[i + 1] > 0) ||
      (diffs[i] < 0 && diffs[i + 1] < 0)
    ) {
      diffs = [
        ...diffs.slice(0, i),
        diffs[i] + diffs[i + 1],
        ...diffs.slice(i + 2),
      ];
      i = -1;
    }
  }

  return diffs.length + 1;
};

console.log(
  wiggleMaxLength([
    126, 37, 130, 225, 239, 77, 235, 333, 30, 69, 294, 128, 163, 17, 224, 229,
    128, 59, 205, 265, 328, 259, 337, 93, 354, 316, 309, 67, 36, 88, 133, 359,
    8, 335, 247, 209, 279, 94, 41, 62,
  ])
);
