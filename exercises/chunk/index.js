// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]

const chunk = (array, size) => {
  const matrix = [];
  let tmp = [];
  for (const c of array) {
    tmp.push(c);
    if (tmp.length === size) {
      matrix.push(tmp);
      tmp = [];
    }
  }
  if (tmp.length) matrix.push(tmp);
  return matrix;
};

module.exports = chunk;
