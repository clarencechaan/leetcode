/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  answerKey = answerKey.split("").map((char) => +(char === "T"));
  let left = 0;
  let right = 0;
  const freq = [0, 0];
  for (; right < answerKey.length; right++) {
    freq[answerKey[right]]++;
    if (Math.min(...freq) > k) {
      freq[answerKey[left]]--;
      left++;
    }
  }

  return right - left;
};

console.log(maxConsecutiveAnswers("TTFF", 2));
