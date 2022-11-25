/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let dictS = {};
  let dictT = {};
  for (let i = 0; i < s.length; i++) {
    if (!dictS[s[i]] && !dictT[t[i]]) {
      dictS[s[i]] = t[i];
      dictT[t[i]] = s[i];
    } else if (dictS[s[i]] !== t[i] && dictT[t[i]] !== s[i]) return false;
  }
  return true;
};

console.log(isIsomorphic("badc", "baba"));
