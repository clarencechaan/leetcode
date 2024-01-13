/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  let objs = [];
  for (let i = 0; i < nums1.length; i++)
    objs.push({ add: nums1[i], min: nums2[i] });

  objs.sort((a, b) => (a.add > b.add ? -1 : 1));
  for (let i = 0; i < objs.length; i++) objs[i].idx = i;

  let mins = {};
  for (const obj of objs) {
    if (!mins[obj.min]) mins[obj.min] = [];
    mins[obj.min].push(obj);
  }
  mins = Object.entries(mins);

  let sum = 0;
  for (let i = 0; i < k; i++) sum += objs[i].add;

  let max = 0;
  let lastValidIdx = k - 1;
  for (let [min, minArr] of mins) {
    if (lastValidIdx >= objs.length) break;
    max = Math.max(max, sum * min);
    let numDeleted = 0;
    for (const obj of minArr) {
      obj.invalid = true;
      if (obj.idx <= lastValidIdx) {
        sum -= obj.add;
        numDeleted++;
      }
    }
    while (numDeleted) {
      lastValidIdx++;
      while (objs[lastValidIdx]?.invalid) lastValidIdx++;
      sum += objs[lastValidIdx]?.add || 0;
      numDeleted--;
    }
  }

  return max;
};

console.log(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3));
