/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let canonical = path;
  // replace all instances of "//" with "/"
  while (canonical.includes("//")) canonical = canonical.replace("//", "/");

  // remove leading "/"
  if (canonical[canonical.length - 1] === "/")
    canonical = canonical.substring(0, canonical.length - 1);

  // remove trailing "/"
  if (canonical[0] === "/") canonical = canonical.substring(1);

  // convert to array
  canonical = canonical.split("/");

  // remove all "." directories
  canonical = canonical.filter((str) => str !== ".");

  // resolve ".." directories
  for (let i = 0; i < canonical.length; i++) {
    if (canonical[i] === "..") {
      canonical = [
        ...canonical.slice(0, Math.max(i - 1, 0)),
        ...canonical.slice(i + 1),
      ];
      i -= 2;
    }
  }

  // convert back to string
  canonical = canonical.join("/");

  // add leading "/" if missing
  if (canonical[0] !== "/") canonical = "/" + canonical;
  return canonical;
};

console.log(simplifyPath("/a//b////c/d//././/.."));
