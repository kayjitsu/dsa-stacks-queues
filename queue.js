/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if (this.first === null) {
      let newNode = new Node(val);
      this.first = newNode;
      this.last = newNode;
    } else {
      let newNode = new Node(val);
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.first === null) {
      throw new Error('empty queue');
    }
    let oldFirst = this.first;
    let newFirst = this.first.next;
    this.first = newFirst;
    this.size--;
    return oldFirst.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.first === null) {
      throw new Error('empty');
    }
    else return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;
    else return false;
  }
}

module.exports = Queue;
