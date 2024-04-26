/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
  if (cards.length === 1) return Math.abs(24 - cards[0]) < 0.00001;

  for (let i = 0; i < cards.length; i++) {
    const a = cards[i];
    for (let j = i + 1; j < cards.length; j++) {
      const b = cards[j];
      const newCards = [...cards];
      newCards.splice(j, 1);
      newCards[i] = a + b;
      if (judgePoint24(newCards)) return true;
      newCards[i] = a - b;
      if (judgePoint24(newCards)) return true;
      newCards[i] = b - a;
      if (judgePoint24(newCards)) return true;
      newCards[i] = a * b;
      if (judgePoint24(newCards)) return true;
      newCards[i] = a / b;
      if (judgePoint24(newCards)) return true;
      newCards[i] = b / a;
      if (judgePoint24(newCards)) return true;
    }
  }

  return false;
};

console.log(judgePoint24([4, 1, 8, 7]));
