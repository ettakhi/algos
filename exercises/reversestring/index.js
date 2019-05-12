// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => [...str].reduce((acc, cur) => cur + acc);

// const reverse = str => [...str].reverse().join('');

// function reverse(str) {
//   let res = '';
//   for (const c of str) {
//     res = c + res;
//   }
//   return res;
// }

reverse('Hakim');

module.exports = reverse;
