/**
 * @param {array} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  let xAxis = [];
  let yAxis = '';
  let grid = [];
  let gridIndex = 0;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.') {
        if (yAxis.indexOf(board[j][i]) === -1) {
          yAxis += board[j][i];

          xAxis[j] = xAxis[j] || '';
          if (xAxis[j].indexOf(board[j][i]) === -1) {
            xAxis[j] += board[j][i];
          } else {
            return false;
          }
        } else {
          return false;
        }

        if (i <= 2) {
          if (j <= 2) {
            gridIndex = 0;
          } else if (j >= 6) {
            gridIndex = 1;
          } else {
            gridIndex = 2;
          }
        } else if (i >= 6) {
          if (j <= 2) {
            gridIndex = 6;
          } else if (j >= 6) {
            gridIndex = 7;
          } else {
            gridIndex = 8;
          }
        } else {
          if (j <= 2) {
            gridIndex = 3;
          } else if (j >= 6) {
            gridIndex = 4;
          } else {
            gridIndex = 5;
          }
        }

        grid[gridIndex] = grid[gridIndex] || '';
        if (grid[gridIndex].indexOf(board[j][i]) === -1) {
          grid[gridIndex] += board[j][i];
        } else {
          return false;
        }
      }
    }
    yAxis = '';
  }

  return true;
};

module.exports = isValidSudoku;