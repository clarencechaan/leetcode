/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;

  let nonBullSecret = {};
  let nonBullGuess = {};

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) bulls++;
    else {
      if (!nonBullSecret[secret[i]]) nonBullSecret[secret[i]] = 0;
      if (!nonBullGuess[guess[i]]) nonBullGuess[guess[i]] = 0;
      nonBullSecret[secret[i]]++;
      nonBullGuess[guess[i]]++;
    }
  }

  for (const char in nonBullGuess)
    cows += Math.min(nonBullGuess[char] || 0, nonBullSecret[char] || 0);

  return bulls + "A" + cows + "B";
};

console.log(getHint("1123", "0111"));
