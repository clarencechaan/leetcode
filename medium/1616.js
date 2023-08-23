/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
  const n = a.length;

  let idxPreASuffB = 0;
  for (let i = 0; i <= n; i++)
    if (i === n || a[i] !== b[n - 1 - i]) {
      idxPreASuffB = i;
      break;
    }

  let idxPreBSuffA = 0;
  for (let i = 0; i <= n; i++)
    if (i === n || b[i] !== a[n - 1 - i]) {
      idxPreBSuffA = i;
      break;
    }

  let idxMidA;
  let idxMidB;
  let midLower = Math.floor(n / 2);
  let midUpper = Math.ceil(n / 2);
  for (let i = 1; i <= midLower + 1; i++)
    if (a[midLower - i] !== a[midUpper + i - 1] || midLower === i - 1) {
      idxMidA = midLower - i + 1;
      break;
    }
  for (let i = 1; i <= midLower + 1; i++)
    if (b[midLower - i] !== b[midUpper + i - 1] || midLower === i - 1) {
      idxMidB = midLower - i + 1;
      break;
    }

  return (
    idxPreASuffB >= idxMidA ||
    idxPreASuffB >= idxMidB ||
    idxPreBSuffA >= idxMidA ||
    idxPreBSuffA >= idxMidB
  );
};

console.log(checkPalindromeFormation("x", "y"));
