/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  blacklist.sort((a, b) => (a > b ? 1 : -1));

  let validRanges = [];
  for (let i = 0; i <= blacklist.length; i++) {
    const left = (blacklist[i - 1] ?? -1) + 1;
    const right = (blacklist[i] ?? n) - 1;
    validRanges.push([left, right]);
  }
  validRanges = validRanges.filter(([left, right]) => left <= right);

  this.validN = n - blacklist.length;
  this.validRanges = validRanges;
  this.blacklist = blacklist;
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  let randomNumber = Math.floor(Math.random() * this.validN);
  for (const [left, right] of this.validRanges) {
    const size = right - left + 1;
    if (randomNumber >= size) randomNumber -= size;
    else return left + randomNumber;
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

//  n: 0 1 2 3 4 5 6 7 8 9
// bl: x x   x   x x   x

// validN == 4
// 0 -> 2
// 1 -> 4
// 2 -> 7
// 3 -> 9

// need a map or array that tells us "if our randomNumber is greater than or equal to x then we have add y to it"
// e.g., if >=3 then add 6
//       if >=2 then add 5
//       if >=1 then add 3
//       if >=0 then add 2

// n == 300
// blacklist == [14, 20, 60, 72, 99, 105, 135, 136, 177, 200, 250]
// valid == 0->13, 15->19, 21->59, 61->71, 72->98, 100->104, 106->134, 137->176, 178->199, 201->249, 251->299
// we have 300-11 == 289 valid numbers we can pick
// randomNumber is in range [0, 288]
// if it's in range 0->13, add 0
