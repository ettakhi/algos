// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = n => {
  const sign = Math.sign(n);
  const rev = +[...(sign * n).toString()].reduce((acc, cur) => cur + acc);
  return sign * rev;
};

module.exports = reverseInt;
