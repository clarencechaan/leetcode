/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder.sort((a, b) => (a.length > b.length ? 1 : -1));
  let set = new Set(folder);

  for (const a of set)
    for (const b of set)
      if (b[a.length] === "/" && b.slice(0, a.length) === a) set.delete(b);

  return [...set];
};

console.log(removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"]));
