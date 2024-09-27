/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  let perm = Array(n)
    .fill()
    .map((_, idx) => idx);

  function applyOperation(perm) {
    return perm.map((_, i) =>
      i % 2 === 0 ? perm[i / 2] : perm[n / 2 + (i - 1) / 2]
    );
  }

  function isInitial(perm) {
    for (let i = 0; i < n; i++) if (perm[i] !== i) return false;
    return true;
  }

  let ans = 0;
  do {
    ans++;
    perm = applyOperation(perm);
  } while (!isInitial(perm));

  return ans;
};

console.log(reinitializePermutation(2));
