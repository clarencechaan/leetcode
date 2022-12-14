/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i + needle.length <= haystack.length; i++)
    if (haystack.substring(i, i + needle.length) === needle) return i;
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
