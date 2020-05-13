// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
const vows = "aeiou";
const vowels = (str) => {
  let count = 0;
  for (const c of str.toLowerCase()) {
    if (vows.includes(c)) count++;
  }
  return count;
};
// const vowels = (str) => {
//   return [...str.toLowerCase()].reduce((count, c) => (vows.includes(c) ? count + 1 : count), 0);
// };

module.exports = vowels;
