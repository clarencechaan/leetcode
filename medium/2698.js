/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  function isPartitionable(str, num) {
    if (str == num) return true;
    for (let i = 1; i < str.length; i++)
      if (isPartitionable(str.slice(i), num - str.slice(0, i))) return true;
    return false;
  }

  let ans = 0;
  for (let i = 1; i <= n; i++)
    if (isPartitionable((i * i).toString(), i)) ans += i * i;

  return ans;
};

console.log(punishmentNumber(10));
