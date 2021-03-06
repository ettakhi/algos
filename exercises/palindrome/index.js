// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// const palindrome = str =>
//   [...str].every((c, i) => c === str[str.length - 1 - i]);
const palindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

// const palindrome = str => {
//   const rev = [...str].reduce((acc, cur) => cur + acc);
//   return rev === str;
// };

// const palindrome = (str) => {
//   let isPal = true;
//   for (let i = 0; i < Math.ceil(str.length / 2); i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       isPal = false;
//       break;
//     }
//   }
//   return isPal;
// };

module.exports = palindrome;
