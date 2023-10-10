/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const n = A.length;

  let result = [];
  let setA = new Set();
  let setB = new Set();
  let common = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] === B[i]) common++;
    else {
      setA.add(A[i]);
      setB.add(B[i]);
      if (setB.has(A[i])) common++;
      if (setA.has(B[i])) common++;
    }
    result.push(common);
  }

  return result;
};

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
