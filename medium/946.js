/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let arr = [];
  let idx1 = 0;
  let idx2 = 0;

  for (let i = 0; i < pushed.length * 2; i++) {
    if (arr[arr.length - 1] === popped[idx2]) {
      arr.pop();
      idx2++;
    } else if (idx1 < pushed.length) {
      arr.push(pushed[idx1]);
      idx1++;
    }
  }

  return arr.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
