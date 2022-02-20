class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let item = new Node(val);
    if (this.size === 0) {
      this.first = item;
      this.last = item;
    } else {
      this.last.next = item;
      this.last = item;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.size === 0) return null;
    if (this.size === 1) this.last = null;
    let item = this.first;
    this.first = this.first.next;
    item.next = null;
    this.size++;
    return item;
  }
}

let queue = new Queue();
console.log(queue.enqueue("image-processing"));
console.log(queue.enqueue("disk-processing"));
console.log(queue.dequeue());
console.log(queue.dequeue());
