/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var minInteger = function (num, k) {
  // while k is greater than or equal to the length of nums:
  // add as many "0"s to our result string as possible,
  // if none possible, try "1"
  // if none possible, try "2"...
  // if none possible, try "9"

  // now, k should be less than the length of nums:
  // solve the remaining substring using naive approach
  // (find smallest integer in nums that can be moved to the front, move it
  // to the front, and repeat until k is 0)

  num = num.split("");

  function getIndices(digit) {
    digit = digit.toString();
    const indices = [];
    for (let i = 0; i < num.length; i++) if (num[i] === digit) indices.push(i);
    return indices;
  }

  let result = "";
  while (num.length) {
    if (k < num.length) break;
    let indices = [];
    let digit;
    for (digit = 0; digit <= 9 && !indices.length; digit++)
      indices = getIndices(digit);
    digit--;
    const missed = new Set();
    for (let i = 0; i < indices.length; i++) {
      const idx = indices[i];
      if (k - (idx - i) >= 0) {
        result += digit;
        k -= idx - i;
      } else missed.add(idx);
    }
    indices = new Set(indices);
    num = num.filter((_, idx) => !indices.has(idx) || missed.has(idx));
  }

  function naiveMinInteger(num) {
    num = num.split("");
    for (let left = 0; left < num.length; left++) {
      const right = Math.min(num.length, left + k + 1);
      let minIdx = left;
      for (let i = left + 1; i < right; i++)
        if (num[i] < num[minIdx]) minIdx = i;
      for (let i = minIdx; left < i; i--)
        [num[i], num[i - 1]] = [num[i - 1], num[i]];
      k -= minIdx - left;
    }

    num = num.join("");
    return num;
  }

  num = num.join("");
  result += naiveMinInteger(num);
  return result;
};

console.log(minInteger("4321", 4));
