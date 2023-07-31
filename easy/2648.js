/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let seq = [0, 0, 1];
  while (true) {
    seq = [seq[1], seq[2], seq[1] + seq[2]];
    yield seq[0];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
