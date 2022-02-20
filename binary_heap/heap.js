class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    if (!this.values) return null;
    let max = this.values[0];
    if (this.values.length > 0) {
      let end = this.values.pop();
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let element = this.values[0];
    let idx = 0;
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < this.values.length) {
        let leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.values.length) {
        let rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChild;
        }
      }
      if (!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }
  }
}

let heap = new BinaryHeap();
heap.insert(100);
heap.insert(50);
heap.insert(40);
heap.insert(200);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);
