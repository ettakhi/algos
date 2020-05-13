// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// const vowels = (str) => {
//   const vows = "aeiou";
//   let count = 0;
//   for (const c of str.toLowerCase()) {
//     if (vows.includes(c)) count++;
//   }
//   return count;
// };

// const vowels = (str) => {
//   return [...str.toLowerCase()].reduce((count, c) => (vows.includes(c) ? count + 1 : count), 0);
// };
const vowels = (str) => {
  const matchs = str.match(/[aeiou]/gi);
  return matchs ? matchs.length : 0;
};
module.exports = vowels;
