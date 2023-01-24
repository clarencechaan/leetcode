/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let half1 = s.substring(0, s.length / 2);
  let half2 = s.substring(s.length / 2);

  let vowels1 = 0;
  let vowels2 = 0;

  for (const char of half1) if (vowels.has(char)) vowels1++;
  for (const char of half2) if (vowels.has(char)) vowels2++;

  return vowels1 === vowels2;
};

console.log(halvesAreAlike("textbook"));
