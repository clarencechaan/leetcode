/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  let arr1 = nums1.map((val, idx) => ({ val, idx }));
  let arr2 = nums2.map((val, idx) => ({ val, idx }));

  arr1.sort((a, b) => (a.val > b.val ? 1 : -1));
  arr2.sort((a, b) => (a.val > b.val ? 1 : -1));

  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    while (arr1[i]?.val <= arr2[j]?.val) i++;
    if (arr1[i] && arr2[j]) {
      let { val } = arr1[i];
      let { idx } = arr2[j];
      result[idx] = val;
      arr1[i] = undefined;
      arr2[j] = undefined;
      i++;
      j++;
    }
  }

  i = 0;
  j = 0;
  while (i < nums1.length) {
    if (result[i] !== undefined) i++;
    else {
      while (arr1[j] === undefined) j++;
      result[i] = arr1[j].val;
      j++;
    }
  }

  return result;
};

console.log(
  advantageCount(
    [718967141, 189971378, 341560426, 23521218, 339517772],
    [967482459, 978798455, 744530040, 3454610, 940238504]
  )
);
