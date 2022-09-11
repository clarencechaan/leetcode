/**
 * @param {number} n
 * @return {number}
 */
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
