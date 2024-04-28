/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  let inversePairCount = [1n];
  for (let i = 2; i <= n; i++) {
    const newInversePairCount = [];
    for (let j = 0; j < Math.min(k + 1, inversePairCount.length + i - 1); j++)
      newInversePairCount[j] =
        (newInversePairCount[j - 1] || 0n) +
        (inversePairCount[j] || 0n) -
        (inversePairCount[j - i] || 0n);
    inversePairCount = newInversePairCount;
  }

  return Number((inversePairCount[k] || 0n) % (10n ** 9n + 7n));
};

console.log(kInversePairs(3, 0));

// inversePairCount[x] === the number of permutations with `x` inverse pairs

// n  inversePairCount                                                  length
// 1  [ 1 ]                                                             1
// 2  [ 1, 1 ]                                                          2 == 1 + 1
// 3  [ 1, 2,  2,  1 ]                                                  4 == 2 + 2
// 4  [ 1, 3,  5,  6,  5,  3,  1]                                       7 == 4 + 3
// 5  [ 1, 4,  9, 15, 20, 22, 20,  15,   9,  4,  1 ]                    11 == 7 + 4
// 6  [ 1, 5, 14, 29, 49, 71, 90, 101, 101, 90, 71, 49, 29, 14, 5, 1 ]  16 == 11 + 5

// we can create `inversePairCount` for any `n` and return `inversePairCount[k]` as our answer

// we notice a pattern:
// for example, going from n == 5 to n == 6

// n  inversePairCount
// 5  [ 1, 4, 9, 15, 20, 22, 20, 15, 9, 4, 1 ]
//      ^
// 6  [ 1,

// 5  [ 1, 4, 9, 15, 20, 22, 20, 15, 9, 4, 1 ]
//         ^
// 6  [ 1, 1+4,

// 5  [ 1, 4, 9, 15, 20, 22, 20, 15, 9, 4, 1 ]
//            ^
// 6  [ 1, 5, 5+9

// 5  [ 1, 4, 9,  15, 20, 22, 20, 15, 9, 4, 1 ]
//                ^
// 6  [ 1, 5, 14, 14+15

// 5  [ 1, 4, 9,  15, 20, 22, 20, 15, 9, 4, 1 ]
//                    ^
// 6  [ 1, 5, 14, 29, 29+20,

// 5  [ 1, 4, 9,  15, 20, 22, 20, 15, 9, 4, 1 ]
//                        ^
// 6  [ 1, 5, 14, 29, 49, 49+22,

// 5  [ 1, 4, 9,  15, 20, 22, 20, 15, 9, 4, 1 ]
//      ^                     ^
// 6  [ 1, 5, 14, 29, 49, 71, 71+20-1,

// 5  [ 1, 4, 9,  15, 20, 22, 20, 15, 9, 4, 1 ]
//         ^                      ^
// 6  [ 1, 5, 14, 29, 49, 71, 90, 90+15-4,

// 5  [ 1, 4, 9,  15, 20, 22, 20, 15, 9, 4, 1 ]
//            ^                       ^
// 6  [ 1, 5, 14, 29, 49, 71, 90, 101, 101+9-9

// 5  [ 1, 4, 9,  15, 20, 22, 20, 15, 9, 4, 1 ]
//                ^                      ^
// 6  [ 1, 5, 14, 29, 49, 71, 90, 101, 101, 101+4-15,

// 5  [ 1, 4, 9,  15, 20, 22, 20, 15, 9, 4, 1 ]
//                    ^                     ^
// 6  [ 1, 5, 14, 29, 49, 71, 90, 101, 101, 90, 90+1-20,

// ...
