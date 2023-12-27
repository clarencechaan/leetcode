/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const stack = [];
  const result = [];

  for (let i = 1; i <= n && i <= target[target.length - 1]; i++) {
    stack.push(i);
    result.push("Push");
    if (stack[stack.length - 1] < target[stack.length - 1]) {
      stack.pop();
      result.push("Pop");
    }
  }

  return result;
};

console.log(buildArray([1, 3], 3));
