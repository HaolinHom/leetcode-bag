/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let command = 'head';

  function getAll(head, command) {
    if (head.next) {
      command += '.next';
      return getAll(head.next, command);
    }
    return command;
  }

  command = getAll(head, command);

  for (let i = 1; i < n; i++) {
    command = command.slice(0, command.lastIndexOf('.next'));
  }

  eval(`${command} = ${command + '.next'}`);

  return head;
};

module.exports = removeNthFromEnd;
