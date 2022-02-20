class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push(new Node(val, priority));
    this.bubbleUP();
  }
  bubbleUP() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    let parentIdx;
    let parent;
    while (idx > 0) {
      parentIdx = Math.floor((idx + 1) / 2);
      parent = this.values[parentIdx];
      if (parent.priority >= element.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let element = this.values[0];
    let idx = 0;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swap && rightChild.priority > element.priority) ||
          (swap && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let pQ = new PriorityQueue();
pQ.enqueue("Data structure and algorithms", 10);
pQ.enqueue("Problem Solving", 4);
pQ.enqueue("Project", 3);
pQ.enqueue("Academic", 1);
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.dequeue());
// console.log(pQ.dequeue());
console.log(pQ);
