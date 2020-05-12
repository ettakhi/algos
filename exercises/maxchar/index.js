// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const list = {};
  let [maxL, maxC] = [0, str[0]];
  for (const c of str) {
    list[c] = list[c] + 1 || 1;
    if (list[c] > maxL) [maxL, maxC] = [list[c], c];
  }
  return maxC;
};

module.exports = maxChar;
