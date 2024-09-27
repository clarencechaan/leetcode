/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  const n = skill.length;
  const sum = skill.reduce((sum, s) => sum + s, 0);
  const teamSkill = (sum / n) * 2;

  const freq = {};
  for (const s of skill) freq[s] = (freq[s] || 0) + 1;

  let ans = 0;

  for (let s in freq) {
    if (!freq[s]) break;
    if (freq[s] !== freq[teamSkill - s]) return -1;

    if (s == teamSkill - s) ans += (s * s * freq[s]) / 2;
    else ans += s * (teamSkill - s) * freq[s];

    freq[s] = 0;
    freq[teamSkill - s] = 0;
  }

  return ans;
};

console.log(dividePlayers([3, 2, 5, 1, 3, 4]));
