/**
 * @param {number[]} edges
 * @return {number}
 */
// 1) create an array of 0s of size n
// 2) loop through each node in "edges"
//    a) add index of the node to the created array at index "edges[index]",
//      resulting in an array of edge scores of each node
// 3) return the index of the first occurence of the largest number in the
//      created array
var edgeScore = function (edges) {
  let scores = Array(edges.length).fill(0);

  for (let i = 0; i < edges.length; i++) {
    scores[edges[i]] += i;
  }

  let [node, score] = [null, 0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > score) [node, score] = [i, scores[i]];
  }

  return node;
};

console.log(edgeScore([1, 0, 0, 0, 0, 7, 7, 5]));
