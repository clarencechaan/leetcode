/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isTransformable = function (s, t) {
  // we notice that if we want to move a digit to the beginning via sorting, the
  // digit must be smaller than all elements to the left of this digit
  // thus we can check each digit in `t` to see if we can move the digit to
  // beginning of the array
  // we can quickly check using the `indices` array that stores the indices of
  // each digit from 0 to 9, in descending order
  // as we check each digit in `t`, we pop() indices[digit] if it is possible
  // to move the digit to the beginning

  const indices = Array(10)
    .fill()
    .map(() => []);
  for (let i = s.length - 1; i >= 0; i--) indices[s[i]].push(i);

  function isPossible(digit) {
    if (!indices[digit].length) return false;
    const idx = indices[digit].pop();
    for (let d = 0; d < digit; d++)
      if (indices[d][indices[d].length - 1] < idx) return false;
    return true;
  }

  for (const digit of t) if (!isPossible(digit)) return false;
  return true;
};

console.log(isTransformable("84532", "34852"));
