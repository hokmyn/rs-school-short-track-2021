const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.length = 0;
    this.head = null;
    this.beforeNodeToDelete = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    node.next = this.head;
    this.head = node;
    this.length += 1;
  }

  dequeue() {
    let currentNode = this.head;
    let count = 0;
    let nodeToDelete = null;
    let deletedNode = null;

    while (count < this.length) {
      if (!currentNode.next) {
        nodeToDelete = currentNode;
      } else {
        this.beforeNodeToDelete = currentNode;
        currentNode = currentNode.next;
      }
      count++;
    }

    if (this.beforeNodeToDelete) {
      this.beforeNodeToDelete.next = null;
    }
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this.length -= 1;
    return deletedNode.value;
  }
}

module.exports = Queue;
