const utils = require('../../utils');
const isValidSudoku = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [
      [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ]
    ],
    expected: true,
  },
  {
    args: [
      [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ]
    ],
    expected: false,
  },
  {
    args: [
      [
        ["7",".",".",".","4",".",".",".","."],
        [".",".",".","8","6","5",".",".","."],
        [".","1",".","2",".",".",".",".","."],
        [".",".",".",".",".","9",".",".","."],
        [".",".",".",".","5",".","5",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".","2",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."]
      ]
    ],
    expected: false,
  },
  {
    args: [
      [
        [".",".","4",".",".",".","6","3","."],
        [".",".",".",".",".",".",".",".","."],
        ["5",".",".",".",".",".",".","9","."],
        [".",".",".","5","6",".",".",".","."],
        ["4",".","3",".",".",".",".",".","1"],
        [".",".",".","7",".",".",".",".","."],
        [".",".",".","5",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."]
      ]
    ],
    expected: false,
  },
]);

test.each(testData)(
  '有效的数独: ',
  (board, expected) => {
    expect(isValidSudoku(board)).toEqual(expected);
  }
);

// test command: jest src/036_有效的数独/index.test.js
