/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  // 1. keep track of all streaks of "A" and "B"
  // 2. subtract each streak by 2 (because we only care about the letters in the middle of each streak)
  // 3. sum each streak of "A" and "B"
  // 4. return true if the streak of "A" is greater than "B", otherwise return false;

  const streaks = { A: [], B: [] };
  const streak = { count: 1, person: colors[0] };
  for (let i = 1; i <= colors.length; i++) {
    if (streak.person === colors[i]) streak.count++;
    else {
      streaks[streak.person].push(streak.count);
      streak.count = 1;
      streak.person = colors[i];
    }
  }

  for (let i = 0; i < streaks.A.length; i++)
    streaks.A[i] = Math.max(0, streaks.A[i] - 2);
  for (let i = 0; i < streaks.B.length; i++)
    streaks.B[i] = Math.max(0, streaks.B[i] - 2);

  const sumA = streaks.A.reduce((sum, count) => sum + count, 0);
  const sumB = streaks.B.reduce((sum, count) => sum + count, 0);

  return sumA > sumB;
};

console.log(winnerOfGame("AAABABB"));
