// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
  const objA = objFact(stringA);
  const objB = objFact(stringB);
  const [keysA, keysB] = [Object.keys(objA), Object.keys(objB)];
  if (keysA.length === keysB.length) {
    return keysA.every((key) => objA[key] && objA[key] === objB[key]);
  }
  return false;
};

const objFact = (str) => {
  const obj = {};
  for (const c of str.toLowerCase()) {
    if (c.match(/[a-z]/i)) obj[c] = obj[c] + 1 || 1;
  }
  return obj;
};

module.exports = anagrams;
