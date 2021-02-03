/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length;
  if (len <= 1) {
    return matrix;
  }

  let n = len - 1;
  let col = len / 2;
  let row = Math.floor(col);
  let storage;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      storage = matrix[i][j];
      matrix[i][j] = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = storage;
    }
  }

  return matrix;
};

module.exports = rotate;