const utils = require('../../utils');
const maxDepth = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [
      utils.createTreeNode([3,9,20,null,null,15,7])
    ],
    expected: 3,
  },
  {
    args: [
      utils.createTreeNode([1,2,2,3,4,4,3,5,6,7,8,8,7,6,5])
    ],
    expected: 4,
  },
  {
    args: [
      utils.createTreeNode([])
    ],
    expected: 0,
  },
]);

test.each(testData)(
  '二叉树的最大深度: ',
  (root, expected) => {
    expect(maxDepth(root)).toEqual(expected);
  }
);

// test command: jest src/104_二叉树的最大深度/index.test.js