/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let groups = {};

  for (const str of strs) {
    let counts = {};

    for (const char of str) {
      if (!counts[char]) counts[char] = 0;
      counts[char]++;
    }

    let key = [];
    for (const char in counts) key.push(char + counts[char]);
    key.sort();
    key = key.join("");

    if (!groups[key]) groups[key] = [];
    groups[key].push(str);
  }

  let result = [];
  for (const key in groups) result.push(groups[key]);
  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
