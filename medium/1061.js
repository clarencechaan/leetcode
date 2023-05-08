/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  let sets = new Set();

  loop: for (let i = 0; i < s1.length; i++) {
    for (const set of sets)
      if (set.has(s1[i]) || set.has(s2[i])) {
        set.add(s1[i]).add(s2[i]);
        continue loop;
      }
    sets.add(new Set([s1[i], s2[i]]));
  }

  function combineIntersectingSets(sets) {
    let done = true;
    for (const a of sets) {
      for (const b of sets) {
        if (a === b) continue;
        for (const charA of a)
          if (b.has(charA)) {
            for (const charB of b) a.add(charB);
            sets.delete(b);
            done = false;
            break;
          }
      }
    }
    if (!done) combineIntersectingSets(sets);
  }

  combineIntersectingSets(sets);

  let dict = {};
  for (const set of sets) {
    let min;
    for (const char of set) if (!min || char < min) min = char;
    for (const char of set) dict[char] = min;
  }

  let result = "";
  for (const char of baseStr) result += dict[char] || char;
  return result;
};

console.log(smallestEquivalentString("parker", "morris", "parser"));
