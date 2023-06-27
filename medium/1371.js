/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  let vowelFreq = [0, 0, 0, 0, 0];
  let freqArr = [[0, 0, 0, 0, 0]];

  for (const char of s) {
    switch (char) {
      case "a":
        vowelFreq[0]++;
        break;
      case "e":
        vowelFreq[1]++;
        break;
      case "i":
        vowelFreq[2]++;
        break;
      case "o":
        vowelFreq[3]++;
        break;
      case "u":
        vowelFreq[4]++;
    }
    freqArr.push([...vowelFreq]);
  }

  for (let length = s.length; length > 0; length--) {
    for (let i = 0; i + length <= s.length; i++) {
      let freq = [
        freqArr[i + length][0] - freqArr[i][0],
        freqArr[i + length][1] - freqArr[i][1],
        freqArr[i + length][2] - freqArr[i][2],
        freqArr[i + length][3] - freqArr[i][3],
        freqArr[i + length][4] - freqArr[i][4],
      ];
      if (
        freq[0] % 2 === 0 &&
        freq[1] % 2 === 0 &&
        freq[2] % 2 == 0 &&
        freq[3] % 2 == 0 &&
        freq[4] % 2 == 0
      )
        return length;
    }
  }

  return 0;
};

console.log(findTheLongestSubstring("eleetminicoworoep"));
