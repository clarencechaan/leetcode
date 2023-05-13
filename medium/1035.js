/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  let indicesMap1 = {};
  for (let i = 0; i < nums1.length; i++)
    if (!indicesMap1[nums1[i]]) indicesMap1[nums1[i]] = [i];
    else indicesMap1[nums1[i]].push(i);

  let indicesMap2 = {};
  for (let i = 0; i < nums2.length; i++)
    if (!indicesMap2[nums2[i]]) indicesMap2[nums2[i]] = [i];
    else indicesMap2[nums2[i]].push(i);

  let lines = [];
  for (const num1 in indicesMap1)
    for (const idx1 of indicesMap1[num1])
      if (indicesMap2[num1])
        for (const idx2 of indicesMap2[num1]) lines.push([idx1, idx2]);

  lines.sort((a, b) =>
    a[0] > b[0] || (a[0] === b[0] && a[1] > b[1]) ? 1 : -1
  );

  let dp = [];

  function recurseMaxLines(lines, prevLine = [-1, -1], idx = 0) {
    if (idx >= lines.length) return 0;
    if (dp[idx] !== undefined) return dp[idx];
    let max = 0;
    for (let i = idx; i < lines.length; i++) {
      if (lines[i][0] > prevLine[0] && lines[i][1] > prevLine[1])
        max = Math.max(max, 1 + recurseMaxLines(lines, lines[i], i + 1));
    }
    dp[idx] = max;
    return max;
  }

  let result = recurseMaxLines(lines);
  return result;
};

console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]));
