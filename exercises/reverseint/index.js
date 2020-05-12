// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
const reverseInt = (n) => {
  const isNegative = n < 0;
  const strN = String(isNegative ? -n : n);
  let res = "";
  for (let i = 0; i < strN.length; i++) {
    res = strN[i] + res;
  }
  return isNegative ? -1 * Number(res) : Number(res);
};

module.exports = reverseInt;
