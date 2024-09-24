/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  function getCommonPrefixLength(num1, num2) {
    let length = 0;
    while (
      length < Math.min(num1.length, num2.length) &&
      num1[length] === num2[length]
    )
      length++;
    return length;
  }

  const combined = [];
  for (const num of arr1) combined.push([num.toString(), 1]);
  for (const num of arr2) combined.push([num.toString(), 2]);

  combined.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  let ans = 0;
  for (let i = 1; i < combined.length; i++) {
    if (combined[i][1] === combined[i - 1][1]) continue;
    ans = Math.max(
      ans,
      getCommonPrefixLength(combined[i][0], combined[i - 1][0])
    );
  }

  return ans;
};

console.log(longestCommonPrefix([1, 10, 100], [1000]));
