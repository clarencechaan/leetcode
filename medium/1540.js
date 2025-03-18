/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function (s, t, k) {
  if (s.length !== t.length) return false;

  const minShifts = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) continue;
    const pos1 = s[i].charCodeAt() - 97;
    const pos2 = t[i].charCodeAt() - 97;
    const shifts = pos2 > pos1 ? pos2 - pos1 : 26 - pos1 + pos2;
    minShifts.push(shifts);
  }

  const floor = Math.floor(k / 26);
  const shiftsLeft = Array(26).fill(floor);
  for (let i = 0; i <= k % 26; i++) shiftsLeft[i]++;

  for (const shift of minShifts) {
    if (!shiftsLeft[shift]) return false;
    shiftsLeft[shift]--;
  }

  return true;
};
