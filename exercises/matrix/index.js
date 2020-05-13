// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const matrix = (n) => {
  const mtrx = Array(n);
  for (let i = 0; i < n; i++) {
    mtrx[i] = Array(n).fill(null);
  }

  let step = 1;
  let direction = "right";
  let [i, j] = [0, 0];
  while (true) {
    mtrx[i][j] = step;
    step++;
    if (direction === "right") {
      if (j === n - 1 || mtrx[i][j + 1] !== null) {
        i++;
        direction = "down";
        if (mtrx[i][j]) break;
      } else {
        j++;
      }
    } else if (direction === "down") {
      if (i === n - 1 || mtrx[i + 1][j] !== null) {
        j--;
        direction = "left";
        if (mtrx[i][j]) break;
      } else {
        i++;
      }
    } else if (direction === "left") {
      if (j === 0 || mtrx[i][j - 1] !== null) {
        i--;
        direction = "up";
        if (mtrx[i][j]) break;
      } else {
        j--;
      }
    } else if (direction === "up") {
      if (i === 0 || mtrx[i - 1][j] !== null) {
        j++;
        direction = "right";
        if (mtrx[i][j]) break;
      } else {
        i--;
      }
    }
  }
  return mtrx;
};
matrix(4);

module.exports = matrix;
