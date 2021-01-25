const utils = require('../../utils');
const removeNthFromEnd = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [utils.createListNode([1, 2, 3, 4, 5]), 2],
    expected: utils.createListNode([1, 2, 3, 5]),
  },
]);

test.each(testData)(
  '* 删除链表的倒数第N个节点: ',
  (head, n, expected) => {
    expect(removeNthFromEnd(head, n)).toEqual(expected);
  }
);

// test command: jest hot100/019_删除链表的倒数第N个节点/index.test.js