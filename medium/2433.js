/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  let arr = [pref[0]];
  for (let i = 1; i < pref.length; i++) arr[i] = pref[i - 1] ^ pref[i];
  return arr;
};

console.log(findArray([5, 2, 0, 3, 1]));
