/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
  let arr = [];
  let word = "";
  let reps = 1n;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "2" && s[i] <= "9") {
      if (word) {
        arr.push({ word });
        word = "";
      }
      reps *= BigInt(s[i]);
      if (i === s.length - 1 || s[i + 1] < "2" || s[i + 1] > "9") {
        arr[arr.length - 1].reps = reps;
        reps = 1n;
      }
    }

    if (s[i] >= "a" && s[i] <= "z") word += s[i];
  }
  if (word) arr.push({ word, reps });

  let length = 0n;
  for (let i = 0; i < arr.length; i++) {
    arr[i].range = [length, length + BigInt(arr[i].word.length)];
    length = (length + BigInt(arr[i].word.length)) * arr[i].reps;
  }

  k = BigInt(k - 1);
  for (let i = arr.length - 1; i >= 0; i--) {
    k = k % arr[i].range[1];
    if (k >= arr[i].range[0]) return arr[i].word[k - arr[i].range[0]];
  }
};

console.log(decodeAtIndex("leet2code3", 10));
