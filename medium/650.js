/**
 * @param {number} n
 * @return {number}
 */
//  1) Copy if n is divisible by the current length
//  2) Paste
//  3) Repeat from (1) until the current length is equal to n
var minSteps = function (n) {
  let count = 0;
  let length = 1;
  let clipboardLength = 0;

  function copy() {
    clipboardLength = length;
    count++;
  }

  function paste() {
    length += clipboardLength;
    count++;
  }

  while (length < n) {
    if (n % length === 0) copy();
    paste();
  }

  return count;
};

console.log(minSteps(3));
