/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  let counts = {};
  for (const card of deck)
    if (!counts[card]) counts[card] = 1;
    else counts[card]++;

  let min;
  for (const card in counts) if (!min || min > counts[card]) min = counts[card];
  if (min < 2) return false;

  let result;
  for (let i = min; i >= 2; i--) {
    result = true;
    for (const card in counts)
      if (counts[card] % i !== 0) {
        result = false;
        break;
      }

    if (result) return result;
  }

  return false;
};

console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]));
