/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function (n, x) {
  function positive() {
    for (let i = 0; i <= n.length; i++)
      if (i === n.length || n[i] < x) return n.slice(0, i) + x + n.slice(i);
  }

  function negative() {
    for (let i = 0; i <= n.length; i++)
      if (i === n.length || n[i] > x) return n.slice(0, i) + x + n.slice(i);
  }

  if (n[0] === "-") return negative();
  return positive();
};

console.log(maxValue("99", 9));
