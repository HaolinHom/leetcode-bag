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
  let result = new ListNode(null);
  result.next = head;

  let node1 = result;
  let node2 = result;

  for (let i = 0; i < n + 1; i++) {
    node2 = node2.next;
  }

  while (node2) {
    node1 = node1.next;
    node2 = node2.next;
  }

  node1.next = node1.next.next;

  return result.next;
};

module.exports = removeNthFromEnd;

