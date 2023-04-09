/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) map[s[i]] = [i, i];
    map[s[i]][0] = Math.min(map[s[i]][0], i);
    map[s[i]][1] = Math.max(map[s[i]][1], i + 1);
  }

  let partitions = [];
  let idx = 0;
  for (const letter in map) {
    if (partitions.length === 0) partitions.push(map[letter]);
    else if (map[letter][0] < partitions[idx][1])
      partitions[idx][1] = Math.max(map[letter][1], partitions[idx][1]);
    else {
      partitions.push(map[letter]);
      idx++;
    }
  }

  partitions = partitions.map(([left, right]) => right - left);
  return partitions;
};

console.log(partitionLabels("eccbbbbdec"));
