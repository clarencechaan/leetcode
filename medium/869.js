/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  let arr = n.toString().split("");
  let seen = new Set();

  function reorder(idxSet = new Set(), str = "") {
    if (seen.has(str)) return false;
    seen.add(str);
    if (idxSet.size === arr.length)
      return (Math.log(parseInt(str)) / Math.log(2)) % 1 < 0.00000000000001;
    let result = false;
    for (let i = 0; i < arr.length; i++)
      if (!idxSet.has(i) && (idxSet.size !== 0 || arr[i] != 0))
        result = result || reorder(new Set(idxSet).add(i), str + arr[i]);
    return result;
  }

  return reorder();
};

console.log(reorderedPowerOf2(1521));
