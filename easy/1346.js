/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
// if next number in target is equal to next number in stream
//    push once
// if next number in target is greater than next number in stream
//    find the difference and push that many times, pop that many times, then push
var buildArray = function (target, n) {
  let streamNum = 1;
  let operations = [];

  for (const targetNum of target) {
    if (targetNum > streamNum) {
      for (let i = 0; i < targetNum - streamNum; i++) {
        operations.push("Push");
        operations.push("Pop");
      }
      streamNum = targetNum;
    }

    if (targetNum === streamNum) operations.push("Push");
    streamNum++;
  }

  return operations;
};

console.log(buildArray([2, 3, 4, 5, 8, 9, 10], 10));
