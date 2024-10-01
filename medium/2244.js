/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const freq = {};
  for (const t of tasks) freq[t] = (freq[t] || 0) + 1;

  let ans = 0;
  for (const t in freq) {
    const n = freq[t];
    if (n === 1) return -1;
    else if (n <= 3) ans++;
    else if (n === 4) ans += 2;
    else if (n % 3 === 0) ans += n / 3;
    else ans += Math.floor(n / 3) + 1;
  }

  return ans;
};

// count the frequency of each difficulty level
// for each difficulty level, add the number of rounds it takes to complete to
// our answer

// how to figure out how many rounds to add?
// 1 => -1 (impossible)
// 2 => 1 (2)
// 3 => 1 (3)
// 4 => 2 (2+2)
// 5 => 2 (2+3)
// 6 => 2 (3+3)
// 7 => 3 (3+2+2)
// n => if n == 1: -1
//   => if n <= 3: 1
//   => if n == 4: 2
//   => if n >= 5 && n % 3 == 0: n/3
//   => if n >= 5 && n % 3 >= 1: floor(n/3) + 1

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
