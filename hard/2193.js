/**
 * @param {string} s
 * @return {number}
 */
var minMovesToMakePalindrome = function (s) {
  function recursion(str = s) {
    if (str.length <= 1) return 0;

    const firstChar = str[0];
    const lastChar = str[str.length - 1];

    // first and last characters are the same; remove them
    if (firstChar === lastChar) return recursion(str.slice(1, -1));

    let idx1 = 0;
    while (str[idx1] !== lastChar) idx1++;

    let idx2 = str.length - 1;
    while (str[idx2] !== firstChar) idx2--;

    // find the number of swaps to make the last element equal to the first
    // element, or make the first element equal to the last element
    const swaps1 = idx1;
    const swaps2 = str.length - 1 - idx2;

    // compare the two, make the minimum number of swaps
    if (swaps1 < swaps2)
      return swaps1 + recursion(str.slice(0, idx1) + str.slice(idx1 + 1, -1));
    return swaps2 + recursion(str.slice(1, idx2) + str.slice(idx2 + 1));
  }

  return recursion();
};

console.log(minMovesToMakePalindrome("aabb"));
