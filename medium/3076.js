/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function (arr) {
  const n = arr.length;

  function isValidSubstring(substring, index) {
    for (let i = 0; i < n; i++)
      if (i === index) continue;
      else if (arr[i].includes(substring)) return false;
    return true;
  }

  function getShortest(index) {
    const str = arr[index];
    let shortest = "";
    for (let length = 1; length <= str.length && !shortest; length++) {
      for (let left = 0; left + length <= str.length; left++) {
        const right = left + length;
        const substring = str.slice(left, right);
        if (
          isValidSubstring(substring, index) &&
          (!shortest || substring < shortest)
        )
          shortest = substring;
      }
    }
    return shortest;
  }

  const answer = Array(n)
    .fill()
    .map((_, index) => getShortest(index));
  return answer;
};
