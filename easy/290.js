/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let dictP = {};
  let dictS = {};
  let arrP = pattern.split("");
  let arrS = s.split(" ");

  if (arrP.length !== arrS.length) return false;

  for (let i = 0; i < arrP.length; i++)
    if (!dictP[arrP[i]]) {
      dictP[arrP[i]] = arrS[i];
      dictS[arrS[i]] = arrP[i];
    }

  for (let i = 0; i < arrP.length; i++)
    if (dictP[arrP[i]] !== arrS[i] || dictS[arrS[i]] !== arrP[i]) return false;

  return true;
};

console.log(wordPattern("abba", "dog dog dog dog"));
