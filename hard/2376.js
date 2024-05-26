/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  if (n < 10) return n;

  const nStr = n.toString();

  function numWays(taken, digits) {
    let prod = 1;
    for (let i = 0; i < digits; i++) prod *= 10 - taken - i;
    return prod;
  }

  let initial = [0, 9];
  for (let i = 2; i < nStr.length; i++)
    initial[i] = (initial[i - 1] || 1) * (11 - i);
  initial = initial.reduce((sum, num) => sum + num, 0);

  function special(idx = 0, seen = new Set()) {
    if (idx >= nStr.length) return 0;
    let result = idx === 0 ? initial : 0;

    const taken = idx + 1;
    const digits = nStr.length - idx - 1;

    for (
      let d = idx === 0 ? 1 : 0;
      idx < nStr.length - 1 ? d < nStr[idx] : d <= nStr[idx];
      d++
    ) {
      if (seen.has(d)) continue;
      result += numWays(taken, digits);
    }

    if (seen.has(parseInt(nStr[idx]))) return result;

    seen.add(parseInt(nStr[idx]));

    result += special(idx + 1, seen);
    return result;
  }

  return special();
};

console.log(countSpecialNumbers(820486701));

// find 1..4682
// => 1..999 => 738 (0 taken)
// what is 1000..3999?
// 1000..1999 => 504 == 9*8*7 (1 taken)
// 2000..2999 => 504
// 3000..3999 => 504
// what is 4000..4599?
// 4000..4099 => 56 == 8*7 (2 taken)
// 4100..4199 => 56
// 4200..4299 => 56
// 4300..4399 => 56
// 4400..4499 => 0
// 4500..4599 => 56
// what is 4600..4679?
// 4600..4609 => 7 ==
// 4610..4619 => 7
// 4620..4629 => 7
// 4630..4639 => 7
// 4640..4649 => 0
// 4650..4659 => 7
// 4660..4669 => 0
// 4670..4679 => 7

// 1..9 => 9
// 1..99 => 90
// 1..999 => 738
// 1..9999 => 5274

// 1..3333
// 1000..1999 => 504
// 2000..2999 => 504
// 3000..3099 => 56
// 3100..3199 => 56
// 3200..3299 => 56
// 3300..3309 => 0
// 3310..3319 => 0
// 3320..3329 => 0
