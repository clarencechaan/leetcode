/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function (s) {
  // a palindrome can be formed if there is at most one digit that has an odd
  // count

  const freq = Array(10).fill(0);
  const stringIdxMap = { "0000000000": [0, 0] };

  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] + 1) % 2;
    const str = freq.join("");
    if (!stringIdxMap[str]) stringIdxMap[str] = [i + 1, i + 1];
    else stringIdxMap[str][1] = i + 1;
  }

  let result = 1;
  for (let str in stringIdxMap) {
    result = Math.max(result, stringIdxMap[str][1] - stringIdxMap[str][0]);
    let arr = str.split("");
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "1") {
        arr[i] = "0";
        const str2 = arr.join("");
        result = Math.max(
          result,
          (stringIdxMap[str2]?.[1] || 0) - stringIdxMap[str][0],
          stringIdxMap[str][1] -
            (stringIdxMap[str2]?.[0] >= 0 ? stringIdxMap[str2][0] : Infinity)
        );
        arr[i] = "1";
      }
    }
  }

  return result;
};

console.log(longestAwesome("3242415"));
