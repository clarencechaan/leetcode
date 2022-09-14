/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// 1) for each i where 1 <= i <= n, count the number of people who
//    trust i and count the number of people who i trusts
var findJudge = function (n, trust) {
  let judgeCount = 0;
  let judge = -1;
  for (let i = 1; i <= n; i++) {
    const trustsI = trust.filter((t) => t[1] === i).length;
    const trustedByI = trust.filter((t) => t[0] === i).length;
    if (trustsI === n - 1 && trustedByI === 0) {
      judge = i;
      judgeCount++;
    }
  }

  return judgeCount === 1 ? judge : -1;
};

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
